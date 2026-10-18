# Kala releases: agent instructions

## Bangla writing style

User-approved language preference, recorded **12 October 2026**. Apply this to all Bangla documentation, website copy, navigation, search labels, metadata, and future release text in this repository.

Write natural, formal Bangladeshi Bangla. The text should read like original writing by a Bangladeshi writer, with clear sentences and respectful instructions using আপনি/করুন. Rewrite awkward sentences around their meaning; replacing individual words is not sufficient. Avoid rigid literal translations, unnecessarily literary language, and English sentence structures carried into Bangla.

Use the computer terminology people ordinarily use in Bangladesh. Prefer familiar English loanwords in Bangla script rather than inventing or forcing Bangla equivalents. This does not mean transliterating every word: use natural Bangla for the surrounding explanation and preserve precise linguistic or mathematical terms where needed.

| Concept | Preferred wording | Avoid as the computer term |
| --- | --- | --- |
| Keyboard layout | কিবোর্ড লেআউট | কিবোর্ড বিন্যাস |
| Letter key | অক্ষর | কি / কী |
| Modifier or action key | বোতাম; retain Shift, Ctrl, Alt, Space, etc. | Calling Shift or Ctrl an অক্ষর |
| Window | উইন্ডো | জানালা |
| Large Bangla text corpus | বড় বাংলা টেক্সট ডেটাসেট | বড় বাংলা পাঠসংগ্রহ / পাঠ্যভান্ডার |
| Page / website | পেজ / ওয়েবসাইট | Forced literal equivalents |
| Copy / paste / tools | কপি / পেস্ট / টুলস | Forced literal equivalents |
| Import / export | ইমপোর্ট / এক্সপোর্ট | আমদানি / রপ্তানি |
| Preview / update | প্রিভিউ / আপডেট | পূর্বরূপ / হালনাগাদ |
| Suggestions | সাজেশন | পরামর্শ when naming typing suggestions |
| Light / dark theme | লাইট / ডার্ক থিম | হালকা / গাঢ় চেহারা |
| Product names in Bangla prose | কালা / কালা ঝড় / কালা গতি | Kala ঝড় / Kala গতি |

Kala is a **Windows desktop application**. Describe its workflows with appropriate desktop terms: ক্লিক, রাইট-ক্লিক, উইন্ডো, ডেস্কটপ, টাস্কবার, সিস্টেম ট্রে, and Start Menu. Avoid Android/mobile terminology such as ট্যাপ or মোবাইল কিপ্যাড for application instructions.

Keep exact English app labels beside Bangla explanations when users need them to find a button, menu, or setting. English layout names such as **Kala Jhor** and **Kala Goti** may remain when identifying entries in the app's layout list; use **কালা ঝড়** and **কালা গতি** in explanatory Bangla prose.

Check spelling and suffixes after terminology changes: **প্রিভিউতে**, **প্রিভিউর**, **ট্রেনিংয়ে**, **ট্রেনিংয়ের**, **ইমপোর্টের**, and **এক্সপোর্টের**. Do not rely on blind global replacements.

## Preserve meaning and verify content

- Preserve literal typing examples, including **কি** and **কী** as actual Bangla words. The অক্ষর terminology rule does not authorize changing expected output.
- Preserve key sequences, key maps, filenames, paths, URLs, version identifiers, placeholders, research numbers, formulas, and feature availability.
- Keep model results distinct from measured human typing speed or comfort. Preserve documented application limits and pending validation.
- Edit canonical Bangla guides in `translations/bn/`. Generated pages under `site/src/content/docs/` are recreated by the sync script.
- Website copy also lives in `site/src/components/KalaHome.astro`, `site/scripts/sync-content.mjs`, `site/src/content/i18n/bn.json`, and `site/astro.config.mjs`. Research labels live in `docs/reference/layout-research-snapshot.json`.
- Text inside `<!-- kala:latest -->` and `<!-- kala:latest-channel -->` markers is rewritten by the latest-release workflow. Do not hand-edit those versions or remove the markers; keep surrounding sentences true for any future version, and keep historical review versions outside markers. See “Latest release references” in [SITE.md](SITE.md).
- Read [SITE.md](SITE.md) for the website workflow. After documentation or website copy changes, run the affected content checks and website build from `site/`: `npm run check` and `npm run build`. Review language quality separately; structural checks cannot establish good Bangla writing.
