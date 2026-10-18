// Points the website, README and guides at the newest published Kala release.
// Usage: node site/scripts/update-latest-release.mjs [--releases-json file]
// Reads GitHub releases (GH_TOKEN/GITHUB_TOKEN optional), writes site/src/data/latest-release.json,
// and rewrites only the <!-- kala:latest... --> marked spans. Fails without writing if any marker is broken.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { repoRoot } from './content-map.mjs';
import { repository, latestFile, selectLatest, readWithdrawn, applyLatest, localeOf, markdownFiles } from './latest-release.mjs';

async function fetchReleases() {
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  const headers = { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28', ...(token && { Authorization: `Bearer ${token}` }) };
  const releases = [];
  for (let page = 1; ; page++) {
    const response = await fetch(`https://api.github.com/repos/${repository}/releases?per_page=100&page=${page}`, { headers });
    if (!response.ok) throw new Error(`GitHub releases request failed: ${response.status} ${await response.text()}`);
    const batch = await response.json();
    releases.push(...batch);
    if (batch.length < 100) return releases;
  }
}

const fileArgument = process.argv.indexOf('--releases-json');
const releases = fileArgument > 0 ? JSON.parse(await readFile(process.argv[fileArgument + 1], 'utf8')) : await fetchReleases();
const latest = selectLatest(releases, await readWithdrawn());

const updates = [];
let markers = 0;
for (const file of await markdownFiles()) {
  const fullPath = path.join(repoRoot, file);
  const original = await readFile(fullPath, 'utf8');
  const { text, kinds } = applyLatest(original, latest, localeOf(file), file);
  markers += kinds.length;
  if (text !== original) updates.push([fullPath, text, file]);
}
if (!markers) throw new Error('No kala:latest markers were found; refusing to report the site as updated.');

const previous = await readFile(latestFile, 'utf8').catch(() => '');
const data = JSON.stringify(latest, null, 2) + '\n';
if (data !== previous) updates.push([latestFile, data, path.relative(repoRoot, latestFile)]);
for (const [fullPath, text] of updates) await writeFile(fullPath, text);

console.log(`Latest Kala release: ${latest.tag} (${latest.channel}), ${latest.installer}`);
console.log(updates.length ? `Updated ${updates.map(([, , file]) => file).join(', ')}` : `Already current (${markers} markers).`);
if (process.env.GITHUB_OUTPUT) await writeFile(process.env.GITHUB_OUTPUT, `tag=${latest.tag}\nchanged=${updates.length > 0}\n`, { flag: 'a' });
