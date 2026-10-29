import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, locales, sourcePath, repoRoot, rewriteLinks } from './content-map.mjs';
import { readLatest, applyLatest, localeOf } from './latest-release.mjs';

const matches = (text, regex) => [...text.matchAll(regex)].map((match) => match[1]);
const linkTargets = (text) => matches(text, /\[[^\]]*\]\(([^)]+)\)/g).sort();
const codeTokens = (text) => matches(text, /(?<!`)`([^`\n]+)`(?!`)/g).sort();
const count = (text, regex) => [...text.matchAll(regex)].length;
const rows = (text) => text.split(/\r?\n/).filter((line) => line.startsWith('|'));
const normalizeDigits = (text) => text.replace(/[০-৯]/g, (digit) => String('০১২৩৪৫৬৭৮৯'.indexOf(digit)));
const tableNumbers = (text) => rows(text).map((row) => normalizeDigits(row).match(/(?<![\p{L}])[0-9]+(?:[,.][0-9]+)*(?:e[+-]?[0-9]+)?/gu) || []);
const keyMaps = (text) => {
  let inMap = false;
  const values = [];
  for (const row of rows(text)) {
    const cells = row.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
    if (cells.includes('Q') && cells.includes('P') || cells.includes('A') && cells.includes('L') || cells.includes('Z') && cells.includes('M')) {
      inMap = true;
      continue;
    }
    if (inMap && cells.every((cell) => /^[-:]+$/.test(cell))) continue;
    if (inMap) {
      values.push(cells.slice(1).map((cell) => cell.normalize('NFC')));
      if (values.length % 2 === 0) inMap = false;
    }
  }
  return values;
};

export async function validateContent() {
  let links = 0;
  let markers = 0;
  const latest = await readLatest();
  // Marked release text must already match site/src/data/latest-release.json, so a hand edit
  // cannot leave a stale or garbled version that the release workflow would later overwrite.
  const checkMarkers = (text, file) => {
    const result = applyLatest(text, latest, localeOf(file), file);
    assert.equal(result.text, text, `Latest-release text is stale in ${file}; run node site/scripts/update-latest-release.mjs`);
    markers += result.kinds.length;
    return result.kinds;
  };
  checkMarkers(await readFile(path.join(repoRoot, 'README.md'), 'utf8'), 'README.md');
  for (const page of pages) {
    const english = await readFile(sourcePath(page, 'en'), 'utf8');
    const bangla = await readFile(sourcePath(page, 'bn'), 'utf8');
    assert(/[\u0980-\u09FF]/.test(bangla), `Bangla text missing: ${page.source}`);
    assert.deepEqual(checkMarkers(bangla, `translations/bn/${page.source}`), checkMarkers(english, page.source), `Latest-release markers differ between languages: ${page.source}`);
    assert.deepEqual(linkTargets(bangla), linkTargets(english), `Translated link drift: ${page.source}`);
    assert.deepEqual(codeTokens(bangla), codeTokens(english), `Filename/code drift: ${page.source}`);
    assert.equal(count(bangla, /^#{1,6} /gm), count(english, /^#{1,6} /gm), `Heading omitted: ${page.source}`);
    assert.equal(count(bangla, /^[0-9০-৯]+\. /gm), count(english, /^\d+\. /gm), `Step omitted: ${page.source}`);
    assert.equal(rows(bangla).length, rows(english).length, `Table row omitted: ${page.source}`);
    assert.deepEqual(tableNumbers(bangla), tableNumbers(english), `Translated table number drift: ${page.source}`);
    assert.deepEqual(keyMaps(bangla), keyMaps(english), `Translated key-map drift: ${page.source}`);
    for (const locale of locales) {
      const text = locale === 'en' ? english : bangla;
      rewriteLinks(text, page.source, locale);
      const widths = [];
      for (const line of text.split(/\r?\n/)) {
        if (!line.startsWith('|')) { widths.length = 0; continue; }
        const width = line.trim().replace(/^\||\|$/g, '').split('|').length;
        if (widths.length) assert.equal(width, widths[0], `Malformed table: ${page.source} (${locale})`);
        widths.push(width);
      }
      links += linkTargets(text).length;
    }
  }
  const snapshot = JSON.parse(await readFile(path.join(repoRoot, 'docs/reference/published-layout-snapshot-v1.json'), 'utf8'));
  for (const locale of locales) {
    for (const [slug, name] of [['goti', 'KalaGoti'], ['jhor', 'KalaJhor']]) {
      const guide = await readFile(sourcePath({ source: `docs/layouts/kala-${slug}.md` }, locale), 'utf8');
      const layers = snapshot.finalLayouts[name].nativeLayers;
      const expected = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].flatMap(keys =>
        ['normal', 'shift'].map(layer => [...keys].map(key => layers[layer][key.charCodeAt(0)].normalize('NFC'))));
      assert.deepEqual(keyMaps(guide).map(row => row.map(cell => cell.replaceAll('◌', ''))), expected, `Published key-map drift: ${locale}/${slug}`);
    }
  }
  console.log(`Content checks passed: ${pages.length} complete language pairs; ${links} links; ${markers} latest-release markers at ${latest.tag}; table numbers, key maps, steps, and code/paths preserved.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await validateContent();
