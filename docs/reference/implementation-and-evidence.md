# Implementation and evidence reference

[Guide index](../../USER_GUIDE.md) · [Feature status](../FEATURES_AND_RELEASES.md) · [Layout research](../layouts/research-and-comparison.md)

**Release decision update, 12 October 2026:** Learn is included in normal Release builds. The product layout manifest supplies Avro Phonetic, Kala Goti, and Kala Jhor; UniJoy/UniBijoy is not bundled. Source paths and tag identity below describe the historical review, while shipping policy follows this later decision. Published older installers are not changed by these documentation edits.
This appendix makes the documentation's scope reviewable. The application source is planned for future publication; repository-internal source paths below identify the material reviewed and are not links to already-public source files.

## Source/release identity

| Item | Value |
| --- | --- |
| Review date | 12 October 2026 |
| Application source tag | `v0.1.0-alpha.1` |
| Application source commit | `df967fbe9ac038cf7dabff0cb9c1f5a455dbc76b` |
| Product version in build settings | `0.1.0-alpha.1` |
| Normal installer target | `win-x64`, self-contained, per-user |
| Public release | [Kala v0.1.0-alpha.1](https://github.com/robispider/kala-releases/releases/tag/v0.1.0-alpha.1), marked pre-release |
| Release assets | `KalaSetup-v0.1.0-alpha.1.exe`, `SHA256SUMS.txt` |

The release workflow builds the tagged application in Release and packages it with the installer. These guides were reviewed against that tagged source/configuration; the downloaded executable was not independently unpacked or live-tested during this documentation task.

## Feature sources reviewed

| User-facing subject | Repository-internal implementation/reference |
| --- | --- |
| Version and shipping exclusions | `Directory.Build.props`, `kala/kala.csproj`, `.github/workflows/publish-kala.yml` |
| Installation/update/uninstall | `installer/Build-Installer.ps1`, `SetupForm*`, `InstallationService.cs`, `Uninstall.ps1`, installer README/validation record |
| Startup and one running instance | `kala/Program.cs`, `SingleInstanceApplication.cs`, `Ui/StartupRegistration.cs` |
| Welcome, Home, tray, settings | `kala/Ui/Welcome/*`, `Ui/Pages/*`, `Ui/TrayMenu.cs`, `MainForm.ProductUi.cs`, `ProductPreferences.cs` |
| Actual control wording/defaults | `kala/Resources/Localization/UiStrings*.resx`, `LearnUiStrings*.resx`, preference classes |
| Supplied layouts | `kala/layout/manifest.json`, `layout/bn/AvroPhoneticLayout.json`, `UniJoy.json`, `KalaGoti.json`, `KalaJhor.json` |
| Fixed/context-vowel behavior | `kala/Keyboard/FixedLayoutManager.cs`, `KeyboardLayout.cs` |
| Import formats/options/lifecycle | `kala/Layouts/*`, `MainForm.LayoutImports.cs`, `Ui/AvroImportForm*` |
| Shared external typing and checked delivery | `kala/TypingSession.cs`, `CheckedOutputAdapter.cs`, Windows routing/target classes, external-app contract |
| Corrections and optional suggestions | `kala/AutoCorrector.cs`, `SuggestionService.cs`, `RomanTransliterationCandidates.cs`, `TypingAssistanceForm.cs`, current repository user guide |
| Marks, positions, and traces | `kala/SpellingMarkService.cs`, `WindowsMarkPlatform.cs`, `WordMarks.cs`, current repository user guide |
| Personal entries/export/import/reset | `kala/PersonalProfile.cs`, `PersonalProfileStore.cs`, `PersonalWordsManager.cs`, `Ui/Pages/WordsPage.cs`, `WordEditCard.cs` |
| Learning flow and partial settings | `kala/Learning/*`, `Ui/Learn/*`, `learning-packs/*`, learning implementation/validation records |
| Avro attribution and implementation scope | `kala/NOTICE-AVRO.txt`, layout/parser/candidate sources |

Static control names were checked against the current UI resources; examples and key maps use the bundled layout definitions. Older planning text can describe an earlier stage. For example, the original export report said Jhor needed a D-style engine; the current `FixedLayoutManager` implements that rule. Likewise, older user-guide text listed only two ready layouts; the current manifest and build copy rules include Goti/Jhor too.

## Research records used

All paths in this section are inside the source repository's separate `colemak-bangla` research project:

| Record | What it establishes |
| --- | --- |
| `docs/RESEARCH_SPEC.md`, `docs/colemak-model-spec.md` | Frozen objective, assumptions, scope labels, and distinction between best found/bounded/proven |
| `results/phase1/REPORT.md` | Reference-model reproduction and documented differences |
| `results/phase2/REPORT.md` | Inventory, normalization, document split, scorer cross-checks, and initial baselines |
| `results/phase3/REPORT.md` | Four vowel styles, Wikipedia search, round trips, and independent scoring |
| `results/phase3-crosscheck/REPORT.md`, `crosscheck.json` | News preprocessing, overlap removal, fixed-layout variants, grid scores, escapes, and baseline hashes |
| `results/phase4/REPORT.md`, `phase4.json` | Exact integer model, lower bounds, scoped proofs, and sensitivity for the earlier Wikipedia-only layouts |
| `results/mix-search/REPORT.md`, `mix-search.json` | Final A/D layouts, training mixture, held-out scores, search convergence, and absence of re-certification |
| `results/kala-keyboards/README.md`, `verification.json` | Exported leaderboard and recorded engine-port/import verification |
| Bundled `KalaGoti.json` / `KalaJhor.json` about blocks | User-facing map/rules, final four-decimal scores, search/corpus facts, and current limitations |

The [machine-readable snapshot](layout-research-snapshot.json) includes result metadata, full-precision mixed-layout scores, recorded benchmark grid scores/hashes, the export-verification record, and source-file SHA-256 hashes. It omits raw corpora, local user paths, personal choices, and application source code. It is a documentation snapshot, not a runnable independent reproduction kit.

## Recorded results versus checks for this guide

The numerical comparison, reference reproduction, Phase 4 certificates, sensitivity results, and decoder-port pass counts are **existing recorded research results**. They were not recomputed during guide preparation. The guide distinguishes the final mixed-corpus layouts from their certified predecessors and typed cases from skipped/unavailable text.

Documentation review checks the relative links, Markdown tables, all 52 key/layer cells per layout, supplied examples, copied numerical tables, and source identity/hashes. It does not install a global keyboard hook, change typing behavior, run a new human trial, or establish live compatibility in Word, browsers, Paint, or Photoshop.

Known app/suggestion/live-validation limitations are retained on the [feature-status page](../FEATURES_AND_RELEASES.md). A passing build or isolated fixture is not substituted for those outstanding validations.

## Original project credit

Thank you to [OmicronLab](https://www.omicronlab.com/) and the [Avro Keyboard contributors](https://github.com/omicronlab/Avro-Keyboard) for the layout/rule work used to emulate Avro Phonetic. Kala's own notice identifies adapted formatting/parser/search-pattern sources and the independent Kala dictionary/session/output scope. The README credit is an acknowledgment; it does not replace notices or applicable terms attached to third-party material.

The layout research builds on [Colemak Mod-DH's effort model](https://colemakmods.github.io/mod-dh/model.html), [comparison method](https://colemakmods.github.io/mod-dh/compare.html), and the [reference analyzer](https://github.com/stevep99/keyboard-layout-analysis-tool). Compared-layout credits are included alongside their specific benchmark variants.
