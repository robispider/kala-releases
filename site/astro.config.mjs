import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://robispider.github.io',
  base: '/kala-releases',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Kala',
      description: 'Free Bangla typing, plugin-free spellchecking, and autocorrection for Windows. Original layouts, built-in learning, and bilingual guides.',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        bn: { label: 'বাংলা', lang: 'bn' },
      },
      logo: { src: './src/assets/kala-mark-256.png', alt: 'Kala', replacesTitle: false },
      favicon: '/favicon.ico',
      social: [
        { icon: 'github', label: 'Kala on GitHub', href: 'https://github.com/robispider/kala-releases' },
      ],
      customCss: ['./src/styles/kala.css'],
      sidebar: [
        {
          label: 'Start here', translations: { bn: 'শুরু করুন' },
          items: ['guide', 'guide/installation', 'guide/typing'],
        },
        {
          label: 'Everyday features', translations: { bn: 'দৈনন্দিন ব্যবহারের ফিচার' },
          items: ['guide/layouts', 'guide/on-screen-keyboard', 'guide/corrections', 'guide/personal-words', 'guide/settings', 'guide/learning'],
        },
        {
          label: 'Keyboard layouts', translations: { bn: 'কিবোর্ড লেআউট' },
          items: ['layouts/avro-unijoy', 'layouts/kala-jhor', 'layouts/kala-goti'],
        },
        {
          label: 'Research & release', translations: { bn: 'গবেষণা ও রিলিজ' },
          items: ['research', 'release-status', 'reference'],
        },
      ],
      pagination: true,
      lastUpdated: false,
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#31583e' } },
      ],
    }),
  ],
});
