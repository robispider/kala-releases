# 5. Corrections, suggestions, and spelling marks

[Guide index](../USER_GUIDE.md) · [Next: personal words](06-personal-words.md)

Kala's assistance options are separate. Automatic corrections can change a completed word; suggestions let you choose an alternative; spelling marks indicate a word's status; deliberate feedback saves a personal choice only when you explicitly request it.

## Set the amount of help

1. Open **Settings**.
2. Under **Corrections**, set **Automatic corrections** and **Show suggestions below the cursor** independently.
3. Set **Pause before suggestions** to a value from **100 to 5,000 ms**. The default is **400 ms**.
4. Enable **Extra Ctrl + Alt commands** only if you want those shortcuts.
5. Set **Save my deliberate choices** if you want the separate restore-and-save action.
6. Set **Mark words while I type** if you want spelling marks.

Automatic corrections start on in a new profile. Suggestions, extra commands, deliberate feedback saving, and spelling marks start off unless you enable them during welcome/setup or later.

## Automatic word corrections

1. Type a word using any active layout.
2. Press **Space** to finish it.
3. Kala evaluates the translated word against its correction policy and your personal choices.
4. Review the result. If a correction is unwanted, use eligible Undo or save a personal protection rule.

The policy protects words accepted as correct by Kala's gold dictionary, supported inflections, reviewed correction targets, and qualifying usage evidence. Reviewed curated rules are trusted except when they would change a gold word. Mined spelling-error rules apply only from a word considered incorrect to a permitted correct result. A correct but often-confused word can be offered as a suggestion instead of changed automatically.

That describes the policy implemented in code; it is not a promise that the dictionary knows every name or that every possible error will be recognized. Use **My word** or **Do not change** for a spelling that must be kept.

Punctuation produced at a word's edges, such as a comma, quote, or danda (।), is kept while the word is corrected. The automatic rules cover supported **single words**. Built-in phrase correction is not provided; deliberately saved shortcuts can expand to a phrase.

Turning **Automatic corrections** off stops mistake replacements. It does not disable explicitly saved **Shortcut** expansions. Remove the shortcut itself to stop its expansion.

## Choose a suggestion while typing

1. Enable **Show suggestions below the cursor**.
2. Type a word and pause for the configured delay.
3. If Kala has usable alternatives and can verify the target, a compact list appears near the caret without taking editor focus.
4. Use **Up/Down** to select a row.
5. Press **Enter**, or click the row, to accept it.
6. Press **Escape** or choose **Keep as typed** to dismiss it.

The first alternative is highlighted. Highlighting alone does not accept it. When a current actionable list is open, Enter replaces the word without adding a newline or Space. With no such list open, these keys retain their normal app behavior.

Continuing to type, pressing Space/Tab, navigation, or another edit dismisses the list. Space finishes the word and runs your existing correction settings. Accepting or dismissing a suggestion does **not** silently save a personal preference.

For Avro Phonetic, Kala can show up to three dictionary alternatives for the current Roman token. A word absent from Kala's dictionary may have no Roman alternatives. These choices come from Kala's own dictionary and do not reproduce Avro's full dictionary or remembered-choice behavior.

## Undo or restore and save

After an eligible automatic or accepted correction:

1. Use **Undo correction** on the assistance controls or **Undo** on the on-screen keyboard.
2. Kala restores the exact original word and separator state if the target/range remains valid.
3. The opportunity expires after **15 seconds**, another edit, or a relevant target/settings change.

To both restore and protect the original spelling, enable **Save my deliberate choices**, then choose **Restore + save original** while it is available. Kala restores first and deliberately saves a **Do not change** entry under Personal words. A failed save can leave the text restored while showing that the choice was not saved.

Exact Undo needs a verified range. In a compatibility field where Kala cannot prove that range, automatic word corrections can still work while exact Undo is unavailable.

## Optional extra commands

Enable **Extra Ctrl + Alt commands** in Settings. These operate only while the corresponding current action is available:

| Command | Action |
| --- | --- |
| **Ctrl + Alt + 1 / 2 / 3** | Accept alternative 1, 2, or 3 |
| **Ctrl + Alt + 0** | Dismiss the current list |
| **Ctrl + Alt + U** | Undo the eligible correction |
| **Ctrl + Alt + R** | Restore and save the original, with deliberate feedback saving enabled |

Turn the extra commands off if they conflict with an app. Plain Up/Down/Enter selection does not need this switch.

## Read spelling marks

1. Enable **Mark words while I type**.
2. Type in the intended app. Marks appear only where Kala can confirm text/position evidence.
3. Interpret the mark:

| Mark | Meaning |
| --- | --- |
| **Red wavy line** | Likely spelling error |
| **Cyan dotted line** | Correct word that is often confused with another |
| **Light green highlight** | Word Kala automatically corrected |

The marks are drawn above the app. They do not edit the document, take focus, or intercept clicks. A word still being typed is evaluated after the suggestion pause. Personal words, protected words, and recognized correct words are not marked red.

## Review a marked word

1. Enable suggestions as well as marks.
2. Click inside a marked word or move the caret into it, then pause.
3. If an actionable alternative is available, select it with the keyboard or mouse. For a green corrected word, an alternative can be the original spelling.
4. If Kala cannot establish a safe replacement location, treat the alternatives as reference and edit the word yourself.

In readable standard text boxes, Kala can verify and replace an earlier word directly. In compatibility fields, replacement requires a synchronized record of Kala's own typing plus fresh caret evidence. It may step the caret to the word's end and confirm arrival before replacing it; if confirmation fails, it cancels the replacement.

After clicking into older text, retyping the word or its end can establish fresh context. Kala does not guess a deletion range from a mark alone.

Marks can disappear after paste, undo, selection, scroll, resize, or window switches. If Kala cannot confirm the old text/position, it starts again at the current caret. Turning marks off or pausing clears the in-memory typing record.

## Assistance availability and current limits

Bangla composition and enabled automatic corrections continue in ordinary compatibility fields. Actionable suggestions, marks on earlier words, and exact Undo depend on text/caret evidence. Not every app exposes that evidence.

The recorded suggestion-quality gate and controlled live app/accessibility validation are still incomplete. Suggestions are optional; review them before accepting. See [feature status](FEATURES_AND_RELEASES.md) and [support](07-settings-privacy-and-support.md).
