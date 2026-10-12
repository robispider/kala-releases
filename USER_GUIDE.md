# Kala User Guide

Kala lets you type Unicode Bangla in Windows applications with your physical keyboard or Kala's on-screen keyboard. It is free to use and distribute. Its source code will be made available in the future.

This guide describes the current implementation reviewed on **12 October 2026**, at the application source tag **v0.1.0-alpha.1**. The public release is an **alpha pre-release**. Feature availability follows the normal Release configuration; the learning module has a separate availability note. Recorded research results are identified as such, rather than presented as new live app tests.

## Start here

1. Download the setup executable from [Kala releases](https://github.com/robispider/kala-releases/releases). For v0.1.0-alpha.1, it is `KalaSetup-v0.1.0-alpha.1.exe`.
2. Run setup normally and choose **Open Kala** when installation finishes.
3. Follow the welcome steps. Choose Avro Phonetic for Roman spelling, UniJoy for its familiar fixed keys, or one of Kala's research layouts: Kala Goti or Kala Jhor.
4. Click an editable field in the app where you want to write.
5. Press **Ctrl + Alt + V**, the default shortcut, to turn Bangla on for that app.
6. Type, then press the shortcut again when you want ordinary input.

Kala remembers each app's on/off choice until Kala restarts. Closing Kala's main window leaves it running near the clock. Right-click its tray icon and choose **Exit Kala** to stop it.

## Read by feature

| Guide | What you will learn |
| --- | --- |
| [1. Installation and first start](docs/01-installation-and-first-start.md) | Download, install, complete the welcome steps, update, and uninstall |
| [2. Everyday typing and external apps](docs/02-typing-and-apps.md) | Turn Bangla on, use the tray, pause Kala, type in documents and text tools, and recover from an incomplete edit |
| [3. Layouts and importing](docs/03-layouts-and-import.md) | Choose among four supplied layouts; import, replace, export, and remove layouts |
| [4. On-screen keyboard](docs/04-onscreen-keyboard.md) | Select a destination, use modifiers, switch layouts, and understand disabled keys |
| [5. Corrections, suggestions, and spelling marks](docs/05-corrections-suggestions-and-marks.md) | Configure automatic help, choose alternatives, undo a correction, and read spelling marks |
| [6. Personal words and shortcuts](docs/06-personal-words.md) | Protect names, save replacements, expand shortcuts, back up choices, and delete personal learning |
| [7. Settings, privacy, and support](docs/07-settings-privacy-and-support.md) | Change appearance and startup behavior, understand local storage, troubleshoot, and share diagnostics |
| [8. Learning module — availability and use](docs/08-learning-module.md) | Use setup, daily practice, the course map, problem-key practice, progress, and course packs when Learn is included in your build |

For the default layouts, read the [Avro Phonetic tutorial and complete UniJoy key reference](docs/layouts/avro-phonetic-and-unijoy.md).

## Kala's research layouts

| Layout | Main difference | Recorded result |
| --- | --- | --- |
| [Kala Jhor / Kala ঝড়](docs/layouts/kala-jhor.md) | A vowel key produces a sign after a consonant and a full vowel elsewhere | Lowest average modeled effort in the eight-layout comparison; **35.7% lower than UniJoy** |
| [Kala Goti / Kala গতি](docs/layouts/kala-goti.md) | Vowel signs have fixed keys; hasant + sign produces the full vowel, as in UniJoy | Second-lowest average modeled effort; **34.1% lower than UniJoy** |

These percentages measure the research model's effort on held-out text. They are not measured typing-speed gains. Read [how the layouts were built, tested, and compared](docs/layouts/research-and-comparison.md) for the method, complete results, and scientific scope.

## Feature and release status

[Features and release availability](docs/FEATURES_AND_RELEASES.md) distinguishes supplied features, optional assistance, the development learning module, and work still pending. [Implementation and evidence reference](docs/reference/implementation-and-evidence.md) identifies the source snapshot and recorded results behind this guide.

## Credit and feedback

Kala's Avro Phonetic implementation uses Avro Phonetic's layout and rules to mimic its typing behavior. Thank you to [OmicronLab](https://www.omicronlab.com/) and the Avro Keyboard contributors. The [Avro Keyboard repository](https://github.com/omicronlab/Avro-Keyboard) contains their original project.

Report issues through [Kala's public Issues page](https://github.com/robispider/kala-releases/issues). Include the version, app, layout, and steps that reproduce the problem. Use a short public example instead of private document text.
