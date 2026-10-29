# 3. Layouts and importing

[Guide index](../USER_GUIDE.md) · [Next: on-screen keyboard](04-onscreen-keyboard.md)

## Choose a supplied layout

| Layout | How it types | Useful starting point |
| --- | --- | --- |
| **Avro Phonetic** | Roman spellings are composed into Bangla | You know the English keyboard and prefer phonetic entry |
| **Kala Goti / কালা গতি** | Optimized fixed keys with hasant + vowel-sign full-vowel entry | You prefer hasant + vowel-sign entry for full vowels |
| **Kala Jhor / কালা ঝড়** | Optimized fixed keys with context-sensitive vowels | You want the lowest modeled effort found by Kala's research and are ready to learn its vowel rules |

Kala supplies Avro Phonetic, Kala Goti, and Kala Jhor. **UniJoy/UniBijoy is not bundled with the release.** Its retained key reference is for research and comparison. You can import a layout you are entitled to use if its file matches a supported format.

1. Open **Layouts** in Kala.
2. Read the layout card's description and examples.
3. Choose **Use this layout** on a ready card.
4. Confirm the card is marked **In use**. The active choice's button becomes **Selected**.
5. Try a fresh word in Home or your intended app.

You can also switch using **Settings → Layout**, the tray's **Layout** menu, or the on-screen keyboard's layout choices. Switching clears the partial word. Unavailable layouts cannot be selected. **Shohoj Phonetic** has no supplied model in the normal release and is not a usable supplied layout.

Read [Avro Phonetic and UniJoy typing/key references](layouts/avro-phonetic-and-unijoy.md), the complete [Jhor guide](layouts/kala-jhor.md), [Goti guide](layouts/kala-goti.md), and [research comparison](layouts/research-and-comparison.md).

## Import a layout

1. Obtain a supported layout file.
2. Open **Layouts** and choose **Import layout…**.
3. Select a Kala native `.json` file or an Avro `.avrolayout` file.
4. Review the name, author/developer, type, version, and any comments shown.
5. For an Avro file, review the four formatting options described below.
6. Choose **Import**.
7. The current layout stays active. Choose **Use this layout** on the imported card when you want to switch.
8. Type a short sample and try Shift/AltGr mappings that you use.

Exact repeat imports are recognized. Different layouts that share a name can remain separate entries. The source file is unchanged; Kala stores its own copy and preferences under `%LOCALAPPDATA%\Kala\Layouts`.

## Avro formatting options

These choices are separate from the original Avro layout file:

| Option | Purpose |
| --- | --- |
| **Format vowels automatically** | Enables the imported layout's modern vowel formatting |
| **Move reph before the preceding consonant** | Changes how the reph sequence is arranged |
| **Place vowel signs before chandrabindu** | Changes the ordering when vowel signs and chandrabindu meet |
| **Type Bangla with the numeric keypad** | Enables Bangla output for the numeric keypad |

Supported Avro **format 5 fixed layouts** can use Normal, Shift, AltGr, and Shift+AltGr states. AltGr means the right Alt key. Unmapped states preserve ordinary input in that exact state. An imported Avro fixed layout does not bring in Avro Phonetic's engine, dictionary, or user preferences.

## Kala native file support

The importer accepts self-contained, UTF-8 Bangla JSON layouts with type/version **fixed 1.0** or **phonetic 4.0**. Their mappings, combinations, and formatting rules come from the file. Kala's correction settings remain separate and apply to the imported layout.

The current importer requires a Space mapping, limits files to **1 MiB**, and bounds each mapping output to **64 UTF-16 units**. Files requiring a separate trained model (`wfstphonetic`) are not supported. Full old-style Avro 4 format and Bijoy/ANSI output are not supported.

Those checks establish that Kala can load the file; they do not prove compatibility with every external app. Try the imported layout in the apps you use.

## Replace an imported layout

1. Find the imported layout card.
2. Choose **Replace file…**.
3. Select a supported native or Avro file and review the preview.
4. Confirm **Replace**.
5. If the layout was active, start a new word after replacement.

Replacement retains the saved identity. When replacing an Avro file with another Avro file, Kala retains its separate Avro formatting preferences. A failed replacement reports the problem and keeps the prior usable choice. Kala retains recovery copies of replaced imports.

## Export or remove

To share or back up the original imported file, choose **Export original…** and select a destination. It exports the original `.json` or `.avrolayout` unchanged; Kala's separate Avro formatting preferences are not included.

To remove an import, choose **Remove…** and confirm the prompt. If it is active, Kala first switches to a supplied layout. Removed/replaced imports have local recovery copies; exported copies outside Kala remain yours to manage. Supplied layouts do not have these imported-file actions.

If an import becomes damaged, its card can become unavailable while supplied layouts remain usable. Replace it from a known-good source file rather than editing Kala's stored copies while Kala is running.
