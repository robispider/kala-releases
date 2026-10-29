import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { siteRoot, base, locales, pages } from './content-map.mjs';

const root = path.join(siteRoot, 'dist');
async function walk(dir) {
  const files = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const name = path.join(dir, item.name);
    files.push(...item.isDirectory() ? await walk(name) : [name]);
  }
  return files;
}
const generated = await walk(root);
const existing = new Set(generated.map((file) => file.replaceAll('\\', '/')));
let checkedLinks = 0;
for (const locale of locales) {
  for (const route of ['', ...pages.map((page) => page.route)]) {
    const file = path.join(root, locale, route, 'index.html');
    const html = await readFile(file, 'utf8');
    assert(html.includes(`lang="${locale}"`), `Wrong page language: ${file}`);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `Duplicate/missing page title: ${file}`);
    assert(!html.includes('This content is not available in your language yet.'), `Untranslated fallback: ${file}`);
    assert(!html.includes('এই পেজের বাংলা অনুবাদ এখনো নেই।'), `Untranslated fallback: ${file}`);
    const other = locale === 'en' ? 'bn' : 'en';
    assert(html.includes(`${base}/${other}/${route ? route + '/' : ''}`), `Missing same-page language route: ${file}`);
  }
}
for (const file of generated.filter((name) => name.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const target = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|data:|mailto:|javascript:)/.test(target) || target === '') continue;
    const url = new URL(target, `https://robispider.github.io${base}/${path.relative(root, file).replaceAll('\\', '/')}`);
    assert(url.pathname.startsWith(base + '/') || url.pathname === base, `Escaped Pages base: ${target}`);
    const relative = decodeURIComponent(url.pathname.slice(base.length)).replace(/^\//, '');
    let resolved = path.join(root, relative).replaceAll('\\', '/');
    if (resolved.endsWith('/')) resolved += 'index.html';
    if (!existing.has(resolved) && existing.has(resolved + '/index.html')) resolved += '/index.html';
    assert(existing.has(resolved), `Broken output link ${target} in ${path.relative(root, file)}`);
    if (url.hash && resolved.endsWith('.html')) {
      const destination = resolved === file.replaceAll('\\', '/') ? html : await readFile(resolved, 'utf8');
      const anchor = decodeURIComponent(url.hash.slice(1));
      assert(destination.includes(`id="${anchor}"`), `Broken heading ${target} in ${path.relative(root, file)}`);
    }
    checkedLinks++;
  }
}
assert(existing.has(path.join(root, 'pagefind/pagefind.js').replaceAll('\\', '/')), 'Missing built search index');
const data = JSON.parse(await readFile(path.join(root, 'evidence/layout-research-snapshot.json'), 'utf8'));
assert.equal(data.finalLayouts.KalaJhor.scores.lessEffortThanUniJoyPercent, 35.7);
assert.equal(data.finalLayouts.KalaGoti.scores.lessEffortThanUniJoyPercent, 34.1);
const bytes = await stat(path.join(root, 'en/index.html'));
for (const locale of locales) {
  const home = await readFile(path.join(root, locale, 'index.html'), 'utf8');
  for (const route of ['', 'research/', 'layouts/kala-layout/']) {
    const page = await readFile(path.join(root, locale, route, 'index.html'), 'utf8');
    assert(page.includes('https://robispider.github.io/kala-typing-master/'), `Missing Typing Master link: ${locale}/${route}`);
    assert(!page.includes('shared-76c9b9dbfc689d0b'), `Experimental identity leaked into product page: ${locale}/${route}`);
  }
  assert(home.includes(`https://robispider.github.io/kala-layout/${locale}/how/`), `Missing localized layout-origin link: ${locale}`);
  const research = await readFile(path.join(root, locale, 'research/index.html'), 'utf8');
  for (const route of ['', 'how/', 'reproduce/', 'challenge/']) {
    assert(research.includes(`https://robispider.github.io/kala-layout/${locale}/${route}`), `Missing localized research link: ${locale}/${route}`);
  }
}
assert(bytes.size > 1000);
console.log(`Site checks passed: ${locales.length * (pages.length + 1)} pages; ${checkedLinks} local links/assets/anchors; language switching, search, and research download.`);
