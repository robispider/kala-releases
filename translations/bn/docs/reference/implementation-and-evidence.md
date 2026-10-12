# বাস্তবায়ন ও প্রমাণের তথ্যসূত্র

[নির্দেশিকার সূচি](../../USER_GUIDE.md) · [ফিচারের অবস্থা](../FEATURES_AND_RELEASES.md) · [বিন্যাসের গবেষণা](../layouts/research-and-comparison.md)

এই পরিশিষ্ট নির্দেশিকার পরিধি যাচাই করতে সাহায্য করে। অ্যাপের সোর্স ভবিষ্যতে প্রকাশ করার পরিকল্পনা আছে; নিচের রিপোজিটরির অভ্যন্তরীণ পথগুলো পর্যালোচনা করা উপকরণ চিহ্নিত করে, ইতিমধ্যে প্রকাশ্য সোর্স ফাইলের লিংক নয়।

## সোর্স ও সংস্করণের পরিচয়

| বিষয় | মান |
| --- | --- |
| পর্যালোচনার তারিখ | 12 October 2026 |
| অ্যাপের সোর্স ট্যাগ | `v0.1.0-alpha.1` |
| অ্যাপের সোর্স কমিট | `df967fbe9ac038cf7dabff0cb9c1f5a455dbc76b` |
| বিল্ড সেটিংসে পণ্যের সংস্করণ | `0.1.0-alpha.1` |
| সাধারণ ইনস্টলারের গন্তব্য | `win-x64`, নিজস্ব রানটাইমসহ, ব্যবহারকারীভিত্তিক |
| প্রকাশ্য সংস্করণ | [Kala v0.1.0-alpha.1](https://github.com/robispider/kala-releases/releases/tag/v0.1.0-alpha.1), প্রি-রিলিজ হিসেবে চিহ্নিত |
| সংস্করণের ফাইল | `KalaSetup-v0.1.0-alpha.1.exe`, `SHA256SUMS.txt` |

প্রকাশের workflow ট্যাগ করা অ্যাপকে Release কনফিগারেশনে বিল্ড করে ইনস্টলারের সঙ্গে প্যাকেজ করে। এই নির্দেশিকা ওই ট্যাগ করা সোর্স/কনফিগারেশন অনুযায়ী পর্যালোচনা করা হয়েছে; নির্দেশিকা প্রস্তুতির সময় ডাউনলোড করা এক্সিকিউটেবল আলাদাভাবে খুলে বা বাস্তব অ্যাপে পরীক্ষা করা হয়নি।

## ফিচারের যে সোর্স পর্যালোচনা করা হয়েছে

| ব্যবহারকারীর বিষয় | রিপোজিটরির অভ্যন্তরীণ বাস্তবায়ন/তথ্যসূত্র |
| --- | --- |
| সংস্করণ ও প্রকাশে বাদ দেওয়া অংশ | `Directory.Build.props`, `kala/kala.csproj`, `.github/workflows/publish-kala.yml` |
| ইনস্টল/হালনাগাদ/আনইনস্টল | `installer/Build-Installer.ps1`, `SetupForm*`, `InstallationService.cs`, `Uninstall.ps1`, ইনস্টলারের README/যাচাইয়ের রেকর্ড |
| স্টার্টআপ ও একটি চলমান ইনস্ট্যান্স | `kala/Program.cs`, `SingleInstanceApplication.cs`, `Ui/StartupRegistration.cs` |
| স্বাগত ধাপ, Home, ট্রে, সেটিংস | `kala/Ui/Welcome/*`, `Ui/Pages/*`, `Ui/TrayMenu.cs`, `MainForm.ProductUi.cs`, `ProductPreferences.cs` |
| নিয়ন্ত্রণের প্রকৃত শব্দ ও প্রাথমিক মান | `kala/Resources/Localization/UiStrings*.resx`, `LearnUiStrings*.resx`, পছন্দের ক্লাসগুলো |
| সরবরাহ করা বিন্যাস | `kala/layout/manifest.json`, `layout/bn/AvroPhoneticLayout.json`, `UniJoy.json`, `KalaGoti.json`, `KalaJhor.json` |
| স্থির/প্রসঙ্গনির্ভর স্বরবর্ণের আচরণ | `kala/Keyboard/FixedLayoutManager.cs`, `KeyboardLayout.cs` |
| ইমপোর্টের ফরম্যাট/বিকল্প/জীবনচক্র | `kala/Layouts/*`, `MainForm.LayoutImports.cs`, `Ui/AvroImportForm*` |
| একই সেশনের বাইরের টাইপিং ও পরীক্ষা করা আউটপুট | `kala/TypingSession.cs`, `CheckedOutputAdapter.cs`, Windows routing/target ক্লাস, বাইরের অ্যাপের আচরণ-চুক্তি |
| সংশোধন ও ঐচ্ছিক সাজেশন | `kala/AutoCorrector.cs`, `SuggestionService.cs`, `RomanTransliterationCandidates.cs`, `TypingAssistanceForm.cs`, বর্তমান রিপোজিটরির ব্যবহার নির্দেশিকা |
| চিহ্ন, অবস্থান ও ট্রেস | `kala/SpellingMarkService.cs`, `WindowsMarkPlatform.cs`, `WordMarks.cs`, বর্তমান রিপোজিটরির ব্যবহার নির্দেশিকা |
| ব্যক্তিগত এন্ট্রি/এক্সপোর্ট/ইমপোর্ট/রিসেট | `kala/PersonalProfile.cs`, `PersonalProfileStore.cs`, `PersonalWordsManager.cs`, `Ui/Pages/WordsPage.cs`, `WordEditCard.cs` |
| শেখার ধাপ ও অসম্পূর্ণ সেটিংস | `kala/Learning/*`, `Ui/Learn/*`, `learning-packs/*`, শেখার বাস্তবায়ন/যাচাইয়ের রেকর্ড |
| Avro-র কৃতিত্ব ও বাস্তবায়নের পরিধি | `kala/NOTICE-AVRO.txt`, বিন্যাস/parser/প্রার্থী-খোঁজার সোর্স |

স্থির নিয়ন্ত্রণের নাম বর্তমান UI resource-এর সঙ্গে মিলিয়ে দেখা হয়েছে; উদাহরণ ও কী-তালিকা সরবরাহ করা বিন্যাসের সংজ্ঞা থেকে এসেছে। পুরোনো পরিকল্পনার লেখা আগের পর্যায় বর্ণনা করতে পারে। যেমন, প্রথম এক্সপোর্ট রিপোর্টে Jhor-এর জন্য D-style engine দরকার বলা হয়েছিল; বর্তমান `FixedLayoutManager` সেই নিয়ম বাস্তবায়ন করে। আবার পুরোনো নির্দেশিকায় মাত্র দুটি প্রস্তুত বিন্যাস ছিল; বর্তমান ম্যানিফেস্ট ও বিল্ডের কপি-নিয়মে Goti/Jhor-ও আছে।

## গবেষণার যে রেকর্ড ব্যবহার করা হয়েছে

এই অংশের সব পথ সোর্স রিপোজিটরির আলাদা `colemak-bangla` গবেষণা প্রকল্পের ভেতরে:

| রেকর্ড | কী প্রতিষ্ঠা করে |
| --- | --- |
| `docs/RESEARCH_SPEC.md`, `docs/colemak-model-spec.md` | স্থির objective, অনুমান, পরিধির শ্রেণি ও best found/bounded/proven-এর পার্থক্য |
| `results/phase1/REPORT.md` | মূল মডেল পুনরুৎপাদন ও রেকর্ড করা পার্থক্য |
| `results/phase2/REPORT.md` | প্রতীক-তালিকা, normalization, ডকুমেন্ট বিভাজন, scorer মিলিয়ে দেখা ও প্রাথমিক baseline |
| `results/phase3/REPORT.md` | চারটি স্বর-লেখার পদ্ধতি, Wikipedia অনুসন্ধান, round trip ও স্বাধীন score |
| `results/phase3-crosscheck/REPORT.md`, `crosscheck.json` | সংবাদ প্রস্তুতি, মিল থাকা লেখা বাদ, স্থির-বিন্যাসের সংস্করণ, grid score, escape ও baseline hash |
| `results/phase4/REPORT.md`, `phase4.json` | আগের Wikipedia-only বিন্যাসগুলোর exact integer model, lower bound, নির্দিষ্ট পরিধির proof ও sensitivity |
| `results/mix-search/REPORT.md`, `mix-search.json` | চূড়ান্ত A/D বিন্যাস, প্রশিক্ষণের মিশ্রণ, held-out score, অনুসন্ধানের একই ফলে পৌঁছানো ও নতুন certification না-থাকা |
| `results/kala-keyboards/README.md`, `verification.json` | এক্সপোর্ট করা তুলনা-তালিকা ও রেকর্ড করা engine-port/import যাচাই |
| সরবরাহ করা `KalaGoti.json` / `KalaJhor.json`-এর about অংশ | ব্যবহারকারীর কী-তালিকা/নিয়ম, চূড়ান্ত চার-দশমিক score, অনুসন্ধান/পাঠসংগ্রহের তথ্য ও বর্তমান সীমা |

[মেশিনে পড়ার উপযোগী স্ন্যাপশটে](layout-research-snapshot.json) ফলের metadata, মিশ্র-পাঠসংগ্রহের বিন্যাসের পূর্ণ-নির্ভুল score, benchmark-এর রেকর্ড করা grid score/hash, এক্সপোর্ট যাচাই ও সোর্স ফাইলের SHA-256 hash আছে। এতে মূল পাঠসংগ্রহ, স্থানীয় ব্যবহারকারীর পথ, ব্যক্তিগত পছন্দ বা অ্যাপের সোর্স কোড নেই। এটি নির্দেশিকার স্ন্যাপশট; স্বাধীনভাবে সব ফল পুনরুৎপাদনের runnable kit নয়।

## আগে রেকর্ড করা ফল ও নির্দেশিকার যাচাই

সংখ্যাগত তুলনা, মূল মডেল পুনরুৎপাদন, Phase 4 certificate, sensitivity ও decoder-port-এর সফলতার সংখ্যা হলো **আগে রেকর্ড করা গবেষণার ফল**। নির্দেশিকা প্রস্তুতের সময় এগুলো নতুন করে গণনা করা হয়নি। চূড়ান্ত মিশ্র-পাঠসংগ্রহের বিন্যাসকে certified পূর্বসূরি থেকে এবং টাইপ করা কেসকে বাদ দেওয়া/অনুপলব্ধ লেখা থেকে আলাদা করা হয়েছে।

নির্দেশিকা পর্যালোচনায় relative link, Markdown table, প্রতিটি বিন্যাসের 52টি key/layer cell, সরবরাহ করা উদাহরণ, কপি করা সংখ্যার তালিকা ও সোর্সের পরিচয়/hash যাচাই করা হয়। এতে global keyboard hook ইনস্টল, টাইপিং আচরণ বদল, নতুন মানব-পরীক্ষা বা Word, ব্রাউজার, Paint কিংবা Photoshop-এ বাস্তব সামঞ্জস্য প্রতিষ্ঠা করা হয় না।

অ্যাপ, সাজেশনের মান ও বাস্তব যাচাইয়ের পরিচিত সীমা [ফিচারের অবস্থা](../FEATURES_AND_RELEASES.md) পাতায় রাখা হয়েছে। সফল বিল্ড বা আলাদা fixture ওই বাকি যাচাইয়ের বিকল্প নয়।

## মূল প্রকল্পের কৃতিত্ব

Avro Phonetic অনুকরণে ব্যবহৃত বিন্যাস/নিয়মের কাজের জন্য [OmicronLab](https://www.omicronlab.com/) ও [Avro Keyboard-এর অবদানকারীদের](https://github.com/omicronlab/Avro-Keyboard) ধন্যবাদ। Kala-র নিজস্ব notice-এ অভিযোজিত formatting/parser/search-pattern সোর্স এবং Kala-র আলাদা অভিধান/সেশন/আউটপুটের পরিধি বলা আছে। README-র কৃতজ্ঞতা তৃতীয় পক্ষের উপকরণের notice বা প্রযোজ্য শর্তের বিকল্প নয়।

বিন্যাসের গবেষণার ভিত্তি [Colemak Mod-DH-এর পরিশ্রম মডেল](https://colemakmods.github.io/mod-dh/model.html), [তুলনার পদ্ধতি](https://colemakmods.github.io/mod-dh/compare.html) ও [মূল analyzer](https://github.com/stevep99/keyboard-layout-analysis-tool)। তুলনা করা প্রতিটি নির্দিষ্ট বিন্যাসের কৃতিত্বও benchmark-এর সঙ্গে দেওয়া হয়েছে।
