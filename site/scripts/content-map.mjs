import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const siteRoot = fileURLToPath(new URL('../', import.meta.url));
export const repoRoot = path.resolve(siteRoot, '..');
export const base = '/kala-releases';
export const locales = ['en', 'bn'];
export const pages = [
  { source: 'USER_GUIDE.md', route: 'guide' },
  { source: 'docs/01-installation-and-first-start.md', route: 'guide/installation' },
  { source: 'docs/02-typing-and-apps.md', route: 'guide/typing' },
  { source: 'docs/03-layouts-and-import.md', route: 'guide/layouts' },
  { source: 'docs/04-onscreen-keyboard.md', route: 'guide/on-screen-keyboard' },
  { source: 'docs/05-corrections-suggestions-and-marks.md', route: 'guide/corrections' },
  { source: 'docs/06-personal-words.md', route: 'guide/personal-words' },
  { source: 'docs/07-settings-privacy-and-support.md', route: 'guide/settings' },
  { source: 'docs/privacy.md', route: 'privacy' },
  { source: 'docs/08-learning-module.md', route: 'guide/learning' },
  { source: 'docs/layouts/avro-phonetic-and-unijoy.md', route: 'layouts/avro-unijoy' },
  { source: 'docs/layouts/kala-jhor.md', route: 'layouts/kala-jhor' },
  { source: 'docs/layouts/kala-goti.md', route: 'layouts/kala-goti' },
  { source: 'docs/layouts/research-and-comparison.md', route: 'research' },
  { source: 'docs/FEATURES_AND_RELEASES.md', route: 'release-status' },
  { source: 'docs/reference/implementation-and-evidence.md', route: 'reference' },
  { source: 'docs/reference/original-layout-license.md', route: 'layout-license' },
];

export function sourcePath(page, locale) {
  return path.join(repoRoot, locale === 'en' ? '' : `translations/${locale}`, page.source);
}

const sourceRoutes = new Map(pages.map((page) => [page.source, page.route]));
export function rewriteLinks(markdown, source, locale) {
  return markdown.replace(/(!?\[[^\]]*\])\(([^)]+)\)/g, (match, label, href) => {
    // Keep paired Markdown targets identical while linking to the matching research language.
    const research = 'https://robispider.github.io/kala-layout/';
    if (href.startsWith(`${research}en/`)) return `${label}(${href.replace(`${research}en/`, `${research}${locale}/`)})`;
    if (/^(?:https?:|mailto:|#)/.test(href)) return match;
    const [target, anchor] = href.split('#');
    const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(source), decodeURIComponent(target)));
    if (resolved === 'docs/reference/layout-research-snapshot.json') {
      return `${label}(${base}/evidence/layout-research-snapshot.json)`;
    }
    const route = sourceRoutes.get(resolved);
    if (!route) throw new Error(`Unmapped local link in ${source}: ${href}`);
    return `${label}(${base}/${locale}/${route}/${anchor ? `#${anchor}` : ''})`;
  });
}
