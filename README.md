# Kala for Windows

Kala is a **free Bangla keyboard for Windows**. Type Unicode Bangla in everyday applications with a phonetic or fixed layout, using your physical keyboard or Kala's on-screen keyboard.

**Kala is free to use and distribute.** The application source code will be made available in the future. This repository provides releases and user documentation.

[Download Kala](https://github.com/robispider/kala-releases/releases) · [User guide](USER_GUIDE.md) · [Report an issue](https://github.com/robispider/kala-releases/issues)

## Download and install

The current release is [**v0.1.0-alpha.1**](https://github.com/robispider/kala-releases/releases/tag/v0.1.0-alpha.1), an **alpha pre-release**. Download `KalaSetup-v0.1.0-alpha.1.exe` from its Assets list. `SHA256SUMS.txt` is also supplied.

Setup targets **Windows x64**, installs for your Windows account, and includes its .NET runtime. It needs no administrator permission. The current executable is unsigned, so Windows may show a SmartScreen warning.

1. Run the setup file and follow the wizard.
2. Choose **Open Kala**, then complete the welcome steps and choose a layout.
3. Click the text field where you want to write and press **Ctrl + Alt + V** to turn Bangla on for that app.
4. Type. Press the shortcut again to return to ordinary input.

See the [installation guide](docs/01-installation-and-first-start.md) for the complete steps, updating, and uninstalling.

## Choose how to type

| Layout | Typing method |
| --- | --- |
| **Avro Phonetic** | Roman spellings, such as `ami` → আমি |
| **UniJoy** | Familiar fixed Bangla keys |
| **Kala Goti / Kala গতি** | Research layout with UniJoy-style full-vowel entry |
| **Kala Jhor / Kala ঝড়** | Research layout with context-sensitive vowels |

The layout page lets you select a supplied layout or import a supported Kala `.json` or Avro `.avrolayout` file.

## Kala Jhor and Kala Goti

Kala's **Bangla-DH Pure** research used an explicit ergonomic effort model, large Bangla corpora, 512 search runs per layout, held-out text evaluation, and independent verification.

In the recorded comparison of eight fixed layouts, **Kala Jhor ranked first and Kala Goti second**, with **35.7% and 34.1% lower modeled effort than UniJoy**, respectively. These are model results, not measured speed or comfort gains. The current layouts are the best found by the search, without a global optimality proof.

Read the [Jhor key map and typing steps](docs/layouts/kala-jhor.md), [Goti key map and typing steps](docs/layouts/kala-goti.md), and [scientific method, test results, and full comparison](docs/layouts/research-and-comparison.md).

## Everyday features

- Bangla composition and enabled word corrections in ordinary Windows editable fields.
- Physical and on-screen input with shared layout and correction settings.
- Optional suggestions, spelling marks, and eligible correction Undo.
- Personal words, preferred corrections, protections, and phrase shortcuts.
- English/Bangla interface, light/dark themes, and compact/large on-screen keys.
- Local settings, personal data, and diagnostics.

Help available in a field depends on the app's text/caret support. Read the [typing guide](docs/02-typing-and-apps.md) and [feature/release status](docs/FEATURES_AND_RELEASES.md). The Learn module in the current code base is excluded from the normal Release build; its [separate guide](docs/08-learning-module.md) explains availability.

## Avro Phonetic credit

Kala's Avro Phonetic implementation uses the Avro Phonetic layout and rules to mimic Avro's typing behavior. Thank you to [OmicronLab](https://www.omicronlab.com/) for creating Avro Keyboard and Avro Phonetic and for sharing this work with the Bangla typing community. Learn more in the [Avro Keyboard repository](https://github.com/omicronlab/Avro-Keyboard).

The layout research also builds on the [Colemak Mod-DH effort model](https://colemakmods.github.io/mod-dh/model.html). The [research page](docs/layouts/research-and-comparison.md) credits the compared layout variants and explains the evaluation.

## Help and feedback

Use the [step-by-step user guide](USER_GUIDE.md) to browse every feature/module. Report issues at [Kala Issues](https://github.com/robispider/kala-releases/issues), including your version, Windows/app version, layout, input surface, and a short reproducer.

Settings, personal words, and reports stay on your computer. Review any report or exported profile before sharing. Kala does not upload them automatically.

## Repository contents

- `README.md` — overview, download, and credits
- `USER_GUIDE.md` — guide index and quick start
- `docs/` — feature guides, layout references, release status, and research evidence
- `LICENSE` — project note about free use/distribution and future source availability

Documentation was reviewed against the v0.1.0-alpha.1 source on **12 October 2026**. Future releases may change the available features; read their release notes.
