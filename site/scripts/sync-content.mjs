import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { base, siteRoot, repoRoot, pages, locales, sourcePath, rewriteLinks } from './content-map.mjs';
import { validateContent } from './validate-content.mjs';

await validateContent();
for (const locale of locales) {
  const contentRoot = path.join(siteRoot, 'src/content/docs', locale);
  await mkdir(contentRoot, { recursive: true });
  for (const page of pages) {
    const source = await readFile(sourcePath(page, locale), 'utf8');
    const heading = source.match(/^# (.+)\r?$/m);
    if (!heading) throw new Error(`Missing title: ${page.source} (${locale})`);
    const title = heading[1].replace(/^[0-9০-৯]+\.\s*/, '');
    const body = rewriteLinks(source.replace(/^# .+\r?\n/, '').trim(), page.source, locale);
    const sourceInRepo = locale === 'en' ? page.source : `translations/${locale}/${page.source}`;
    const frontmatter = `---\ntitle: ${JSON.stringify(title)}\neditUrl: ${JSON.stringify(`https://github.com/robispider/kala-releases/edit/main/${sourceInRepo}`)}\n---\n\n`;
    const destination = path.join(contentRoot, `${page.route}.md`);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, frontmatter + body + '\n');
  }
  const hero = {
    tagline: locale === 'en' ? 'Type Bangla, check spelling, and autocorrect together in your everyday Windows apps. No separate plugins. Learn Kala’s own research-designed fixed layouts.' : 'উইন্ডোজের প্রতিদিনের অ্যাপে বাংলা টাইপ করুন, বানান যাচাই করুন ও ভুল সংশোধন করুন—একসঙ্গে। আলাদা প্লাগইন লাগে না। কালার নিজস্ব গবেষণায় তৈরি ফিক্সড লেআউট শিখুন।',
    image: { file: '../../../assets/kala-mascot-520.png', alt: locale === 'en' ? 'Kala’s Black Bengal goat mascot' : 'কালার ব্ল্যাক বেঙ্গল ছাগলের মাসকট' },
    actions: [
      { text: locale === 'en' ? 'Download Kala' : 'কালা ডাউনলোড করুন', link: 'https://github.com/robispider/kala-releases/releases', icon: 'download' },
      { text: locale === 'en' ? 'Read the guide' : 'ব্যবহার নির্দেশিকা পড়ুন', link: `${base}/${locale}/guide/`, variant: 'secondary', icon: 'right-arrow' },
      { text: locale === 'en' ? 'বাংলায় পড়ুন' : 'Read in English', link: `${base}/${locale === 'en' ? 'bn' : 'en'}/`, variant: 'minimal', icon: 'translate' },
    ],
  };
  await writeFile(path.join(contentRoot, 'index.mdx'), `---\ntitle: ${JSON.stringify(locale === 'en' ? 'Better Bangla writing, wherever you work.' : 'নিজের অ্যাপেই আরও সহজে বাংলা লিখুন।')}\ndescription: ${JSON.stringify(locale === 'en' ? 'Free Bangla typing, plugin-free spellchecking, autocorrection, and built-in learning for Windows. Discover Kala’s original research-designed layouts.' : 'উইন্ডোজে বিনা মূল্যে বাংলা টাইপিং, প্লাগইন ছাড়াই স্পেলচেক, অটোকরেকশন ও শেখার মডিউল। কালার নিজস্ব ঝড় ও গতি লেআউট শিখুন।')}\ntemplate: splash\nhero: ${JSON.stringify(hero)}\neditUrl: false\n---\n\nimport KalaHome from '../../../components/KalaHome.astro';\n\n<KalaHome locale="${locale}" />\n`);
}
await mkdir(path.join(siteRoot, 'public/evidence'), { recursive: true });
await writeFile(path.join(siteRoot, 'src/content/docs/404.md'), `---\ntitle: "Page not found / পেজটি পাওয়া যায়নি"\neditUrl: false\n---\n\nThis address does not match a page in the Kala guide. Return to the [English homepage](${base}/en/) or browse the [user guide](${base}/en/guide/).\n\n<span lang="bn">এই ঠিকানায় কালার নির্দেশিকার কোনো পেজ নেই। [বাংলা হোমপেজে](${base}/bn/) ফিরুন অথবা [ব্যবহার নির্দেশিকা](${base}/bn/guide/) পড়ুন।</span>\n`);
await copyFile(path.join(repoRoot, 'docs/reference/layout-research-snapshot.json'), path.join(siteRoot, 'public/evidence/layout-research-snapshot.json'));
await writeFile(path.join(siteRoot, 'public/robots.txt'), 'User-agent: *\nAllow: /\n');
console.log(`Generated ${pages.length * locales.length + locales.length} bilingual pages for ${base}/.`);
