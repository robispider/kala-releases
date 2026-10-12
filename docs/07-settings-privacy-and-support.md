# 7. Settings, privacy, and support

[Guide index](../USER_GUIDE.md) · [Next: optional learning module](08-learning-module.md)

## Settings reference

Open **Settings** in Kala or from its tray menu. Changes save as you make them. A failed save is shown immediately; the prior active setting is retained.

| Group / setting | What it controls | New-profile default |
| --- | --- | --- |
| **Typing → Layout** | One ready layout used across apps | Avro Phonetic |
| **Shortcut** | Toggles Bangla in the current app | Ctrl + Alt + V; alternative Ctrl + Alt + B |
| **Start Kala when Windows starts** | Starts Kala when you sign in | Controlled by per-user startup registration |
| **Automatic corrections** | Applies eligible single-word replacements on Space | On |
| **Show suggestions below the cursor** | Offers alternatives after a typing pause | Off |
| **Pause before suggestions** | Delay from 100–5,000 ms | 400 ms |
| **Extra Ctrl + Alt commands** | Enables optional accept/dismiss/Undo commands | Off |
| **Save my deliberate choices** | Enables deliberate restore-and-save feedback | Off |
| **Mark words while I type** | Shows red/cyan/green spelling marks | Off |
| **Appearance → Interface language** | Language of Kala's windows | English; Bangla is also included |
| **Theme** | Light or dark appearance | Light |
| **On-screen keyboard size** | Compact or large keys | Compact |

The interface language is separate from the language you type. Changing the UI to Bangla does not turn Bangla input on in every app. Windows high-contrast themes override Kala's light/dark choice.

## Change appearance

1. Open **Settings → Appearance**.
2. Choose **English** or **বাংলা** under Interface language.
3. Choose **Light** or **Dark** under Theme.
4. Choose **Compact** or **Large** for the on-screen keyboard.

Installed additional translation resources can add language choices. Changing appearance preserves the layout and your typed practice text.

## Startup and saved settings

To start at sign-in, turn on **Start Kala when Windows starts**. If it does not remain enabled, check the error and Windows' startup-app controls. Windows can independently disable a registered startup app. Kala starts quietly at sign-in and starts with Bangla off in every app.

Settings are stored in `%LOCALAPPDATA%\Kala\settings.json`, with a previous copy at `settings.json.bak`. Kala can recover from a damaged primary copy. If the file is unreadable or belongs to a newer schema, Kala leaves it untouched and explains why changes cannot be saved. Back up the data folder before manually repairing files, and exit Kala first.

## What is stored on your computer

| Location | Contents |
| --- | --- |
| `%LOCALAPPDATA%\Programs\Kala` | Installed app and runtime files |
| `%LOCALAPPDATA%\Kala\settings.json` | Saved interface and typing preferences |
| `%LOCALAPPDATA%\Kala\personal` | Words, corrections, protections, and shortcuts you deliberately saved |
| `%LOCALAPPDATA%\Kala\Layouts` | Imported layouts, options, and recovery copies |
| `%LOCALAPPDATA%\Kala\diagnostics` | Local event codes, counts, and timings |
| `%LOCALAPPDATA%\Kala\probes` | Spelling-mark trace files when marks are enabled |
| `%LOCALAPPDATA%\Kala\learning` | Separate learning profile and imported packs, only in builds that include Learn |
| `%TEMP%\KalaSetup.log` | Setup diagnostics |

Kala does not automatically upload your typing, personal words, diagnostic reports, or learning progress. The spelling mirror records session text in memory to support positions and checked edits; it is not a saved typing history and is cleared when you pause or turn marks off.

Current app diagnostics contain event codes, counts, and timings rather than typed words, sentences, or suggestions. They are bounded to four files of 256 KiB and expire after 14 days. Personal-word exports do contain your saved words and should be treated as private.

An older Kala version may have left an `error.log` beside its executable. That older file may contain text; review or remove it before sharing any old installation folder.

## Review a diagnostic report

1. Open **Help and compatibility** or Settings.
2. Choose **Preview diagnostics**.
3. Read the report in the preview.
4. Use **Copy report** if you want to share it yourself.
5. Paste it into your bug report after checking its contents.

Kala never sends the report for you. If there are no recorded diagnostic events, the preview says so.

## Report a spelling-mark issue

When marks are on, Kala writes `marks-trace-<date>-<time>.txt` under `%LOCALAPPDATA%\Kala\probes`. It records process names, control/accessibility metadata, flags, and counts. It excludes typed text, words, and keys. The newest ten files are kept.

1. Reproduce the problem using a short public example.
2. Exit or pause typing after recording the issue.
3. Open the probes folder and review the newest trace.
4. Attach it only if you are comfortable sharing its app/control metadata.

## Troubleshooting

| Symptom | Steps |
| --- | --- |
| Roman letters appear instead of Bangla | Click the text field, confirm Kala is running and resumed, toggle Bangla for that app, and check the active layout |
| Wrong fixed-layout letters | Confirm which layout is active; open the on-screen keyboard or the layout's key reference |
| Jhor gives a full vowel after clicking into an old word | Its current-word context was reset; retype the consonant and vowel instead of expecting context from unrelated existing text |
| Corrections do not happen | Check Automatic corrections, press Space, and confirm that the word is not protected by Personal words or recognized as correct |
| Shortcut expands despite autocorrection being off | Saved shortcuts are independent; edit/remove the shortcut on Personal words |
| No suggestion list | Enable suggestions, wait for the configured pause, and remember that alternatives and safe caret/range evidence may be unavailable |
| Marks disappear | Paste, selection, scroll, resize, or a target change may invalidate position evidence; type fresh text to establish context |
| On-screen keys are dimmed | Check the target bar, Bangla mode, pause state, and whether the field is protected |
| A font shows boxes or broken glyphs | Select a Bangla-capable Unicode font in the target app and check the app's text-rendering support |
| “Typing needs attention” | Inspect and repair the last edit, then toggle Bangla or pause/resume; start a fresh word |
| Update fails because Kala is running | Choose Exit Kala from the tray before retrying setup |

## Send useful feedback

Open an [Issue](https://github.com/robispider/kala-releases/issues) with the Kala/release version, Windows version, app version, selected layout, physical/on-screen input, assistance settings, and a short step-by-step reproducer. State the expected text and the actual text. Screenshots and diagnostic reports are optional; use public samples and review them before sharing.

The [feature-status page](FEATURES_AND_RELEASES.md) explains known validation limits. A successful practice-field result or installer build alone does not establish compatibility with your particular app.
