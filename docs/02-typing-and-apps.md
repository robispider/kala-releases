# 2. Everyday typing and external apps

[Guide index](../USER_GUIDE.md) · [Next: layouts](03-layouts-and-import.md)

## Type Bangla in an app

1. Start Kala.
2. Open the app where you want to write and click an editable field.
3. Press Kala's selected shortcut: **Ctrl + Alt + V** by default, or **Ctrl + Alt + B** if you chose it in Settings.
4. Confirm that Kala reports **Bangla on** for that app.
5. Type using your selected layout. Multiple keys may compose one Bangla letter or conjunct.
6. Press the shortcut again when you want ordinary input in that app.

The layout is a shared choice across apps. Bangla on/off mode is remembered separately for each app while Kala runs. Switching to a different app does not automatically turn Bangla on there. Restarting Kala clears those app modes but keeps your saved layout and settings.

## Use the Home practice field

1. Open Kala and go to **Home**.
2. Click **Try typing here**.
3. Turn Bangla on using the shown shortcut or the mode button.
4. Type a short example for your layout. **Clear** empties the practice field.

The practice field helps you learn the keys and check a setting. An app outside Kala may handle text, caret movement, or deletion differently, so also try your intended workflow in that app.

## Avro Phonetic basics

With **Avro Phonetic**, use Roman spellings such as `ami` → আমি and `bangla` → বাংলা. The layout is case-sensitive in places; a different capital letter may represent a different Bangla sound. Browse its on-screen keys and examples instead of assuming every English spelling has one Bangla result.

Kala composes text as keys arrive. Space completes a word and runs enabled word corrections or saved shortcuts. URLs and email addresses have preservation handling. The supplied layout and Kala's own correction/suggestion system are distinct; the implementation does not import Avro's dictionary or remembered choices.

## Fixed-layout basics

With **Kala Goti**, **Kala Jhor**, or a supported imported fixed layout, each physical key has a defined output on the normal and Shift layers. The letters printed on an English keyboard identify the physical positions; you are not spelling the Bangla word in Roman letters.

For Jhor and Goti, follow the [Jhor reference](layouts/kala-jhor.md) or [Goti reference](layouts/kala-goti.md). Those pages explain vowel signs, full vowels, hasant, conjuncts, numbers, and complete key maps.

## Tray menu

Right-click Kala's icon near the clock. The menu provides:

| Action | What it does |
| --- | --- |
| **Bangla typing** | Changes Bangla mode for the recent target app |
| **Layout** | Selects a ready layout |
| **On-screen keyboard** | Opens the floating keyboard |
| **Pause Kala / Resume Kala** | Pauses or resumes Kala across all apps |
| **Open Kala** | Opens the main window |
| **Personal words / Settings / Help and compatibility** | Opens the corresponding page |
| **Get started** | Reopens incomplete welcome setup |
| **Exit Kala** | Stops Kala completely |

The tray status identifies the recent app. A green dot means Bangla is on, grey means off, and amber means paused or attention is needed. If it says **Select a text field**, select your destination first.

## Pause and resume

1. Choose **Pause Kala** in Home or the tray.
2. Type normally in your apps while Kala is paused.
3. Choose **Resume Kala** to continue using Kala.
4. Click the intended field and check its Bangla mode before continuing a word.

Pausing, changing the layout, moving to another field, and observed editing/navigation clear partial composition. Start a fresh word after those actions.

## Word, Notepad, browsers, Paint, and Photoshop

For a document or browser editor, click the exact editing area before toggling Bangla. For Paint, Photoshop, or another drawing/design app, select its text tool, activate a text area, and choose a font that contains Bangla glyphs.

### A document in Word or Notepad

1. Create or open a document and click where the text should go.
2. In Word, select a Bangla-capable font if your current font lacks the needed glyphs.
3. Turn Bangla on for that app and type a short sample with your selected layout.
4. Press Space and check the completed word and any correction.
5. Toggle Bangla off before entering ordinary Roman text or using a different input method.

### A browser text field

1. Click a writable form field, comment box, or document editor.
2. Turn Bangla on for the browser app.
3. Type a short sample and check the actual text.
4. When moving to another field or tab, click the new destination and begin a fresh word. Do not assume older word context survives the move.
5. Review suggestion/mark availability separately; different web editors expose different caret and text evidence.

### A text layer in Paint or Photoshop

1. Select the app's text/type tool using its toolbar.
2. Create or activate an editable text box/layer.
3. Select a Unicode font with Bangla glyphs.
4. Turn Bangla on and type a short sample inside that active text area.
5. Check composition and any correction before continuing a long passage. Clicking a canvas without an active text tool does not create an editable typing destination.

Kala sends **Unicode** Bangla. It does not supply Bijoy/ANSI output. Ordinary editable fields retain composition and enabled word corrections, including when Kala cannot read the whole document. Where the app exposes readable text, Kala can verify a replacement. Elsewhere it uses a checked Backspace/Unicode compatibility route for the word being typed.

Suggestions, marks, and exact Undo need additional text/caret evidence and may be unavailable in a particular field even while Bangla typing and automatic corrections work. See [corrections and spelling help](05-corrections-suggestions-and-marks.md).

Password, read-only, disabled, inaccessible, and higher-permission targets can be unavailable. Physical keys then keep their ordinary behavior, and Kala's on-screen output is disabled. A custom editor class or unreadable document alone does not imply that all Bangla input or corrections are unsupported.

The code and fixture checks are not a guarantee for every app version. The recorded controlled live matrix for Word, Notepad, browsers, Paint, and Photoshop remains incomplete.

## Recover from “Typing needs attention”

1. Stop and inspect the last visible edit.
2. Repair any missing character or incomplete replacement yourself.
3. Toggle Bangla off/on, or pause/resume Kala, to clear the notice.
4. Click the destination again and begin a new word.

Kala clears composition after failed or partial delivery and does not automatically replay an uncertain edit. If it repeats, record a short public reproducer and report it using [Help and diagnostics](07-settings-privacy-and-support.md).
