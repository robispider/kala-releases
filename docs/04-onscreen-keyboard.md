# 4. On-screen keyboard

[Guide index](../USER_GUIDE.md) · [Next: corrections and spelling help](05-corrections-suggestions-and-marks.md)

Kala's keyboard floats above other apps and sends clicks to the selected editor. It uses the same layout, word composition, correction policy, and app mode as the physical keyboard.

## Open it and select a destination

1. Choose **Open on-screen keyboard** on Home, or **On-screen keyboard** from the tray menu.
2. Click the text field where the characters should appear.
3. Look at the keyboard's target bar. It should identify the intended app, for example **Typing into Notepad**.
4. Turn Bangla on for that app with the keyboard's mode button or your configured shortcut.
5. Click the on-screen keys. Clicking a key keeps the editor as the destination.
6. If you switch fields or apps, click the new destination and check the target bar again.

Drag the empty title-bar area to move the window. Its close button closes the keyboard window; Kala continues running in the tray.

## Read the key labels

Normal labels reflect the selected layout. Shift and Caps change the displayed mappings. For a fixed layout, the label is the mapped Bangla letter or sign. A phonetic key may be part of a longer Roman sequence, so a single-key label does not list every possible word it can compose.

For Jhor, vowel labels show signs such as ি, but a click can produce the full vowel ই depending on the word's context. Read [Jhor's vowel rules](layouts/kala-jhor.md).

## Use modifiers

| Key | Behavior |
| --- | --- |
| **Shift** | Selects a shifted mapping for the next key |
| **Caps** | Changes letter mappings; Shift reverses the Caps choice for letters |
| **AltGr** | Selects the right-Alt state where an imported layout maps it |
| **Shift + AltGr** | Selects that combined state in supported imported Avro fixed layouts |
| **Ctrl / Alt / Windows** | Preserve ordinary shortcut behavior; ordinary Alt is distinct from AltGr |

For an AltGr mapping, click **AltGr**, optionally **Shift**, then the key. Modifier selections are used for the next key. Kala Jhor and Kala Goti use normal and Shift layers; they do not provide an extra AltGr symbol layer.

The mode shortcut can also be entered with the on-screen Ctrl, left Alt, and V/B keys. Check that the destination app is selected before doing so.

## Change layout or pause

1. Select a ready layout using the keyboard's layout choices.
2. Start a new word; switching layouts clears partial composition.
3. Use its pause button to pause Kala everywhere and resume when ready.

**Layout info** opens the Layouts page. **Undo** asks Kala to restore the most recent eligible correction. If the word range can no longer be verified, exact Undo is unavailable; check the document and repair it manually.

## Make keys larger

1. Open **Settings → Appearance**.
2. Set **On-screen keyboard size** to **Large**.
3. Return to the keyboard. Choose **Compact** later if you want smaller keys.

The appearance setting is saved. The target and correction setting are shared with the physical keyboard, so you can alternate physical keys and clicks within a word.

## If the keys are dimmed

Read the message in the keyboard's target/footer area. Common causes are:

- No destination text field is selected.
- Bangla is off for that app.
- Kala is paused.
- The target is protected or unavailable, such as a password or read-only field.
- A prior edit needs attention.

Select an ordinary editable field, verify the target app, and enable Bangla. If text arrives in the wrong place, stop and select the intended field again before clicking more keys.
