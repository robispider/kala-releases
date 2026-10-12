# Avro Phonetic and UniJoy

[Guide index](../../USER_GUIDE.md) · [Choosing/importing layouts](../03-layouts-and-import.md) · [Kala Jhor](kala-jhor.md) · [Kala Goti](kala-goti.md)

**Release policy:** UniJoy/UniBijoy is not bundled. The map below is retained for research/comparison and supported user imports. A layout reference does not grant rights to redistribute a third-party layout.
## Avro Phonetic: start with Roman spellings

1. Open **Layouts → Avro Phonetic → Use this layout**.
2. Click Home's practice field or an external editable field.
3. Turn Bangla on with **Ctrl + Alt + V** or your selected shortcut.
4. Type `ami`, then Space. Try `bangla` next.
5. Read the composed Bangla as you type; a later key can change the preceding letter sequence.
6. Toggle Bangla off when you want ordinary Roman text in that app.

| Roman input | Supplied layout example |
| --- | --- |
| `ami` | আমি |
| `bangla` | বাংলা |
| `kh` | খ |
| `sh` | শ |

Some capitals represent different sounds. Keep the letter case shown by a recipe; Caps/Shift are not cosmetic changes. Kala preserves URL/email tokens through its handling for those sequences. Corrections run on a completed word at Space, according to your settings.

To review alternative spellings, enable **Show suggestions below the cursor**, type, and pause. The dictionary-based Roman alternatives show up to three choices when available. Use Up/Down then Enter, or click one. Escape keeps your typing. This does not automatically remember a choice; save a preferred spelling explicitly under Personal words.

Kala uses the Avro Phonetic layout and rules to mimic its behavior, with Kala's own session, output checks, correction policy, and dictionary suggestions. Its normal supplied layout does not promise identity with every Avro version or Avro's dictionary-first selections. The separate original-source parser present in the code base is not another normal selectable supplied layout.

Thank you to [OmicronLab](https://www.omicronlab.com/) and the [Avro Keyboard contributors](https://github.com/omicronlab/Avro-Keyboard). Their project is the source of the Avro layout/rule work acknowledged in Kala's README.

## UniJoy: research and imported-layout reference

1. Import a supported UniJoy layout file you are entitled to use, then choose **Use this layout**.
2. Open Kala's on-screen keyboard to inspect the mapping.
3. Click an editable field and turn Bangla on.
4. Press physical keys using the map below; uppercase position labels do not mean hold Shift.
5. Use **G** for hasant. For a full vowel, press G then its sign key, except অ, which is **Shift+F**.

The tables identify US QWERTY key positions. Dotted circles help display combining signs and are not inserted.

| Layer | Q | W | E | R | T | Y | U | I | O | P |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ◌ং | য | ড | প | ট | চ | জ | হ | গ | ড় |
| Shift | ঙ | য় | ঢ | ফ | ঠ | ছ | ঝ | ঞ | ঘ | ঢ় |

| Layer | A | S | D | F | G | H | J | K | L |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ◌ৃ | ◌ু | ◌ি | ◌া | ◌্ | ব | ক | ত | দ |
| Shift | র্ | ◌ূ | ◌ী | অ | । | ভ | খ | থ | ধ |

| Layer | Z | X | C | V | B | N | M |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ◌্র | ◌ো | ◌ে | র | ন | স | ম |
| Shift | ◌্য | ◌ৌ | ◌ৈ | ল | ণ | ষ | শ |

## UniJoy vowel recipes

| Full vowel | Keys |
| --- | --- |
| অ | Shift+F |
| আ | G F |
| ই | G D |
| ঈ | G Shift+D |
| উ | G S |
| ঊ | G Shift+S |
| ঋ | G A |
| এ | G C |
| ঐ | G Shift+C |
| ও | G X |
| ঔ | G Shift+X |

For a sign after a consonant, use the sign key alone: **J D** gives কি. For a conjunct, use consonant + G + consonant: **J G Shift+N** gives ক্ষ. UniJoy also maps multi-unit forms such as ্র, র্, and ্য directly to the indicated keys.

## UniJoy practice examples

Start each example as a fresh word, with Caps off:

| Text | Keys |
| --- | --- |
| আমি | G F M D |
| তুমি | K S M D |
| কী | J Shift+D |
| বই | H G D |
| এবং | G C H Q |
| ক্ষ | J G Shift+N |

Kala's UniJoy is a Unicode fixed-layout implementation. It is not an ANSI output mode, and the research comparison uses this specific mapping. Goti preserves the hasant + sign method with different key positions; Jhor uses a different context-vowel rule.
