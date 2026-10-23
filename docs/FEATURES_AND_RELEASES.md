# Features and release availability

[Guide index](../USER_GUIDE.md) · [Implementation and evidence](reference/implementation-and-evidence.md)

Reviewed **12 October 2026** against the application source at tag **v0.1.0-alpha.1**, commit `df967fbe9ac038cf7dabff0cb9c1f5a455dbc76b`. The public [v0.1.0-alpha.1 release](https://github.com/robispider/kala-releases/releases/tag/v0.1.0-alpha.1) is marked pre-release and provides a Windows x64 setup executable and `SHA256SUMS.txt`. The latest public release is <!-- kala:latest -->[v0.9.0-alpha.1](https://github.com/robispider/kala-releases/releases/tag/v0.9.0-alpha.1)<!-- /kala:latest -->, <!-- kala:latest-channel -->an **alpha pre-release**<!-- /kala:latest-channel -->; read its release notes for changes since this review.

This table reflects the current implementation and the **12 October 2026 release decisions**: include Learn and omit UniJoy from bundled layouts. These decisions apply to the next installer; previously published assets are not replaced by a website update. The source snapshot above supplies the historical implementation evidence. This is not a new live compatibility sign-off or an independent audit of the downloaded executable.

| Feature/module | Current availability | Guide |
| --- | --- | --- |
| Per-user setup, Start Menu shortcut, optional desktop shortcut | Release installer; no separate .NET or admin permission needed | [Installation](01-installation-and-first-start.md) |
| One instance per signed-in session, tray operation, welcome setup | Implemented in the app | [Installation](01-installation-and-first-start.md) |
| Per-app Bangla mode, pause/resume | Implemented; app modes reset on restart | [Typing](02-typing-and-apps.md) |
| Avro Phonetic, Kala Goti, Kala Jhor | Three supplied layouts; UniJoy is retained for research/reference and is not bundled | [Layouts](03-layouts-and-import.md) |
| Jhor context vowels/repeated vowel-key runs | Implemented in the current fixed-layout engine | [Jhor](layouts/kala-jhor.md) |
| Unicode input/composition and enabled word corrections in ordinary external fields | Implemented with verified or checked compatibility delivery | [Typing](02-typing-and-apps.md) |
| Physical and on-screen input | Shared layout/session/correction settings | [On-screen keyboard](04-onscreen-keyboard.md) |
| Native and Avro layout importing | Supported formats with preview, replace, export-original, and remove | [Imports](03-layouts-and-import.md) |
| Automatic corrections | On by default in a fresh profile; runs at Space; gold-truth policy | [Assistance](05-corrections-suggestions-and-marks.md) |
| Pause-time suggestions and Avro Roman alternatives | Optional; safe target/caret evidence and dictionary candidates required | [Assistance](05-corrections-suggestions-and-marks.md) |
| Exact correction Undo / restore-and-save | Conditional on a current verified range; deliberate saving is separate | [Assistance](05-corrections-suggestions-and-marks.md) |
| Spelling marks and marked-word alternatives | Optional, off by default; evidence/position dependent | [Assistance](05-corrections-suggestions-and-marks.md) |
| Personal words, protections, replacements, shortcuts | Local explicit choices; export/import/reset implemented | [Personal words](06-personal-words.md) |
| English/Bangla interface, light/dark themes, keyboard sizes | Implemented; Windows contrast themes respected | [Settings](07-settings-privacy-and-support.md) |
| Local diagnostics and spelling-mark traces | Preview/share manually; no automatic upload | [Support](07-settings-privacy-and-support.md) |
| Learn setup, Today, Course map, Progress, Results, problem keys, Library, Learning settings | Included in the standard release with resources and built-in course packs | [Learning](08-learning-module.md) |
| Shohoj Phonetic | Required model is not supplied for the normal release | [Layouts](03-layouts-and-import.md) |
| Original-source Avro parser / research and model-training tools | Source/development capability; not a separate selectable normal supplied layout or user-facing training feature | [Implementation reference](reference/implementation-and-evidence.md) |

## Recorded limits that matter to users

- The controlled live-app matrix for Word, Notepad, browsers, Paint, and Photoshop, both input surfaces, and imported layouts remains incomplete. Historical user acceptance and isolated fixtures do not establish every app/version combination.
- Suggestion quality is still under evaluation. An inherited frozen gate recorded 5/8 top-three cases against a target of at least 6/8; the guide does not treat it as a completed quality sign-off.
- Exact Undo and safe earlier-word suggestion acceptance are not available in every field. Current-word composition and enabled word correction remain part of compatibility delivery.
- Automatic phrase correction, Bijoy/ANSI output, full old-style Avro 4 imports, and a supplied Shohoj model are unavailable.
- Jhor/Goti have two symbol layers; several rare symbols/joiners have no key. Their current mixed-corpus layouts are best found, not globally proven optimal. Human speed/comfort/learning comparisons remain pending.
- Learn ships with the standard release. Some learning settings are stored preferences with incomplete effects; the learning guide identifies them.

## How to read future releases

1. Use [Releases](https://github.com/robispider/kala-releases/releases) and read the notes for your installed version.
2. Check whether a feature is explicitly included and whether the release is marked pre-release.
3. Follow the matching guide; a development feature's presence in source does not make it available in an older installer.
4. Report behavior with the release version, selected layout, target app, and physical/on-screen input.

Kala is free to use and distribute. The application source code will be made available in the future; no source-publication date is declared here.
