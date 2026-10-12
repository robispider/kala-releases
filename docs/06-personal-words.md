# 6. Personal words and shortcuts

[Guide index](../USER_GUIDE.md) · [Next: settings and support](07-settings-privacy-and-support.md)

Personal words are explicit choices stored on your computer. The list shows each input/output, its type, whether it was added by you or from deliberate feedback, and any built-in correction it overrides or suppresses.

## Choose the right type

| Type | Result | Effect when automatic corrections are off |
| --- | --- | --- |
| **My word** | Treats the spelling as your word and protects it from competing correction/marking | Protection remains |
| **Do not change** | Keeps this exact spelling | Protection remains |
| **Preferred correction** | Uses your single-word replacement instead of a competing built-in rule | Does not apply the replacement |
| **Shortcut** | Expands the token to your single-line text when you press Space | Still expands |

My word and Do not change remain protections. Preferred corrections follow the **Automatic corrections** setting. Shortcuts expand independently of it.

Entries match the **translated token**, not a Roman recipe used to type it. For example, with Avro Phonetic active, a shortcut is matched against the Bangla token Kala produced. Use the exact token you see in the editor.

## Add a word or protection

1. Open **Personal words** from Kala or the tray.
2. Choose **Add word**.
3. Under **What should Kala do?**, select **My word** or **Do not change**.
4. Enter the exact spelling in **When I type**.
5. Read the preview sentence to confirm the effect.
6. Choose **Save**.
7. Return to your editor and begin a fresh word. Profile changes clear partial composition.

This is useful for names and spellings Kala should leave untouched. Adding and editing remain available even if **Save my deliberate choices** is off.

## Save a preferred correction

1. Choose **Add word → Preferred correction**.
2. Enter the exact single-word input in **When I type**.
3. Enter the desired single-word replacement in **Kala should use**.
4. Read the preview, then choose **Save**.
5. Make sure **Automatic corrections** is on.
6. Type the input token in an app and press Space.

The replacement must differ from the input. Protection and preferred correction cannot be assigned simultaneously to the same exact token; edit or remove the existing choice first.

## Create a shortcut

1. Choose **Add word → Shortcut**.
2. Enter a short token with no spaces in **When I type**.
3. Enter a one-line expansion in **Kala should use**. The expansion may contain spaces.
4. Choose **Save**.
5. In an app with Bangla on, type the exact translated token and press **Space**.
6. Check that the intended expansion appeared.

Example: a token such as `শুভ` can be assigned a phrase such as `শুভেচ্ছা রইল`, if you intentionally want that token to expand. Avoid choosing an ordinary word you need to type without expansion. To stop it, remove or edit the shortcut; turning autocorrection off is not enough.

## Find, edit, or remove an entry

1. Use **Search words** to find an input or output.
2. Use the type filter: **All**, **My word**, **Preferred correction**, **Do not change**, or **Shortcut**.
3. Choose a row's edit action to change its type, input, or output.
4. Choose the bin/remove action to delete one choice.
5. Begin a fresh word after making changes.

Changing an entry originally saved from feedback makes it an explicit edited choice. Accepting a normal suggestion does not automatically create a preferred correction.

## Back up and restore

To export:

1. Choose **Export** on Personal words.
2. Select a private destination. The suggested name is `kala-personal.json`.
3. Keep the file with your backups. It contains the words and choices you deliberately saved.

To import:

1. Choose **Import** and select a Kala personal-profile JSON file.
2. At **Replace all current entries with this file?**, choose **Yes** to replace all current entries, **No** to merge, or **Cancel** to keep the current profile.
3. A merge fails if exact input tokens conflict. Resolve conflicts before trying again.
4. Read any error. A failed save/import retains the last loaded durable choices.

Exporting layouts is a separate action on Layouts. Exporting a personal profile does not back up imported keyboard layouts, global settings, or the development learning profile.

## Delete personal learning

1. Export any choices you want to keep.
2. Choose **Delete my learning** on Personal words.
3. Read the confirmation and item count.
4. Confirm deletion to erase managed entries, recovery data, and pending feedback.

If cleanup is blocked by a file or permission restriction, Kala reports it and prevents the old managed entries from reappearing. Resolve the restriction and retry the reset. Exported copies outside Kala are not deleted by this action. The separate Learn profile is managed inside the learning module when that module is available.

## Limits and storage

Inputs and preferred replacements are single tokens without spaces, up to **255 UTF-16 units**. Shortcut expansions can contain spaces, up to **1,024 UTF-16 units** on one line. The profile supports up to **10,000 entries**, and import files are bounded to **8 MiB**. These are storage limits; external replacement additionally depends on session and app safety checks.

Choices live in `%LOCALAPPDATA%\Kala\personal\profile.json` with a recovery copy. Ordinary typing creates no entries. **Restore + save original**, when enabled and available, deliberately adds **Do not change** and labels it **From your feedback**. Turning feedback saving off preserves existing choices.
