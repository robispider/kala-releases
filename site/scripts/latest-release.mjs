import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { repoRoot, siteRoot } from './content-map.mjs';

// Only text wrapped in these markers follows the newest release. Everything else, such as
// "reviewed against v0.1.0-alpha.1", is a historical statement and is never rewritten.
//   <!-- kala:latest -->...<!-- /kala:latest -->                  version, installer name and release URLs
//   <!-- kala:latest-channel -->...<!-- /kala:latest-channel -->  "an alpha pre-release" / "আলফা প্রি-রিলিজ"
export const repository = 'robispider/kala-releases';
export const latestFile = path.join(siteRoot, 'src/data/latest-release.json');
export const withdrawnFile = path.join(siteRoot, 'public/updates/withdrawn.json');

const releasesUrl = `https://github.com/${repository}/releases`;
const tagPattern = /^v(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/;
// One left-to-right pass, so a version inside a URL or installer name is replaced as part of it.
const escapedReleases = releasesUrl.replace(/[.\/]/g, '\\$&');
const releaseToken = new RegExp(
  `(${escapedReleases}/download/[^)\\s]+)|(${escapedReleases}/tag/[^)\\s]+)|(KalaSetup-v[^\\s\`*)\\]]+?\\.exe)|(\\bv\\d+\\.\\d+\\.\\d+(?:-[0-9A-Za-z]+(?:\\.[0-9A-Za-z]+)*)?(?![0-9A-Za-z]))`,
  'g');
const marker = /<!-- kala:(latest|latest-channel) -->(.*?)<!-- \/kala:\1 -->/g;
const anyMarker = /<!-- \/?kala:[^>]*-->/g;

const channelText = {
  en: { alpha: 'an **alpha pre-release**', beta: 'a **beta pre-release**', rc: 'a **release candidate**', prerelease: 'a **pre-release**', stable: 'a **stable release**' },
  bn: { alpha: '**আলফা প্রি-রিলিজ**', beta: '**বেটা প্রি-রিলিজ**', rc: '**রিলিজ ক্যান্ডিডেট**', prerelease: '**প্রি-রিলিজ**', stable: '**স্টেবল রিলিজ**' },
};
const channelLabel = {
  en: { alpha: 'alpha pre-release', beta: 'beta pre-release', rc: 'release candidate', prerelease: 'pre-release', stable: 'stable release' },
  bn: { alpha: 'আলফা প্রি-রিলিজ', beta: 'বেটা প্রি-রিলিজ', rc: 'রিলিজ ক্যান্ডিডেট', prerelease: 'প্রি-রিলিজ', stable: 'স্টেবল রিলিজ' },
};

export function parseTag(tag) {
  const match = tagPattern.exec(tag);
  if (!match) return null;
  return { core: match.slice(1, 4).map(Number), pre: match[4] ? match[4].split('.') : [] };
}

// Semantic-version order: a release without a pre-release suffix outranks its pre-releases.
export function compareTags(a, b) {
  const x = parseTag(a), y = parseTag(b);
  for (let i = 0; i < 3; i++) if (x.core[i] !== y.core[i]) return x.core[i] - y.core[i];
  if (!x.pre.length || !y.pre.length) return y.pre.length - x.pre.length;
  for (let i = 0; i < Math.max(x.pre.length, y.pre.length); i++) {
    const p = x.pre[i], q = y.pre[i];
    if (p === undefined || q === undefined) return p === undefined ? -1 : 1;
    if (p === q) continue;
    const pn = /^\d+$/.test(p), qn = /^\d+$/.test(q);
    if (pn && qn) return Number(p) - Number(q);
    if (pn !== qn) return pn ? -1 : 1;
    return p < q ? -1 : 1;
  }
  return 0;
}

export const installerName = (tag) => `KalaSetup-${tag}.exe`;

export function describeRelease(release) {
  const tag = release.tag_name;
  const installer = installerName(tag);
  const pre = parseTag(tag).pre[0]?.toLowerCase() ?? '';
  const channel = !release.prerelease && !pre ? 'stable'
    : pre.startsWith('alpha') ? 'alpha'
    : pre.startsWith('beta') ? 'beta'
    : pre.startsWith('rc') ? 'rc'
    : 'prerelease';
  return {
    tag,
    channel,
    label: { en: channelLabel.en[channel], bn: channelLabel.bn[channel] },
    publishedAt: release.published_at,
    releaseUrl: `${releasesUrl}/tag/${tag}`,
    installer,
    installerUrl: `${releasesUrl}/download/${tag}/${installer}`,
  };
}

// The newest published, non-withdrawn release that actually carries the setup executable users need.
export function selectLatest(releases, withdrawn = []) {
  const candidates = releases.filter((release) =>
    !release.draft && parseTag(release.tag_name) &&
    !withdrawn.includes(release.tag_name.slice(1)) &&
    release.assets?.some((asset) => asset.name === installerName(release.tag_name)));
  candidates.sort((a, b) => compareTags(b.tag_name, a.tag_name));
  if (!candidates.length) throw new Error('No published Kala release with a setup executable was found.');
  return describeRelease(candidates[0]);
}

export async function readWithdrawn() {
  try {
    return (JSON.parse(await readFile(withdrawnFile, 'utf8')).Versions ?? []).map(String);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

export async function readLatest() {
  return JSON.parse(await readFile(latestFile, 'utf8'));
}

export const localeOf = (relativePath) => relativePath.replace(/\\/g, '/').startsWith('translations/bn/') ? 'bn' : 'en';

function renderSpan(kind, text, latest, locale, where) {
  if (kind === 'latest-channel') return channelText[locale][latest.channel];
  let found = 0;
  const updated = text.replace(releaseToken, (match, download, page, installer) => {
    found++;
    if (download) {
      const file = download.split('/').pop();
      return `${releasesUrl}/download/${latest.tag}/${/^KalaSetup-v.+\.exe$/.test(file) ? latest.installer : file}`;
    }
    return page ? latest.releaseUrl : installer ? latest.installer : latest.tag;
  });
  if (!found) throw new Error(`${where}: a kala:latest marker contains no version, installer name, or release URL.`);
  return updated;
}

// Rewrites only marked spans. Markers must open and close on the same line so a broken marker
// fails loudly instead of swallowing the rest of a page.
export function applyLatest(markdown, latest, locale, where) {
  const kinds = [];
  const lines = markdown.split('\n').map((line, index) => {
    const at = `${where}:${index + 1}`;
    let matched = 0;
    const result = line.replace(marker, (match, kind, text) => {
      matched += 2;
      kinds.push(kind);
      return `<!-- kala:${kind} -->${renderSpan(kind, text, latest, locale, at)}<!-- /kala:${kind} -->`;
    });
    if ((line.match(anyMarker) || []).length !== matched) throw new Error(`${at}: unknown, unclosed, or multi-line kala marker.`);
    return result;
  });
  return { text: lines.join('\n'), kinds };
}

export const stripMarkers = (markdown) => markdown.replace(anyMarker, '');

// Canonical Markdown that may carry markers: the README plus every English and Bangla guide.
export async function markdownFiles() {
  const files = ['README.md', 'USER_GUIDE.md', 'translations/bn/USER_GUIDE.md'];
  for (const root of ['docs', 'translations/bn/docs']) {
    const entries = await readdir(path.join(repoRoot, root), { recursive: true, withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(path.relative(repoRoot, path.join(entry.parentPath, entry.name)).replace(/\\/g, '/'));
      }
    }
  }
  return files.sort();
}
