# Kala Jhor — কালা ঝড়

[Guide index](../../USER_GUIDE.md) · [Kala Goti](kala-goti.md) · [Research and full comparison](research-and-comparison.md)

**Jhor (ঝড়)** means storm. Kala Jhor is a fixed Bangla layout from the **Bangla-DH Pure** research project. Its key positions were found by computer search using Bangla Wikipedia and newspaper text. Its distinguishing feature is **context-sensitive vowels**: the same vowel key can produce a sign or a full vowel.

The current bundled layout is version **1.0**. It has the lowest average modeled effort in the recorded eight-layout comparison: **J1 = 1.8000**, or **35.7% less modeled effort than UniJoy**. This is a result under the stated research model and text sets, not a timed typing-speed result or a proof of the best possible keyboard.

## Select it

1. Open Kala's **Layouts** page.
2. Find **Kala Jhor** and choose **Use this layout**.
3. Open the on-screen keyboard to see its keys.
4. Click an editable field, turn Bangla on with your chosen shortcut, and start a fresh word.

The key names below are the positions printed on a US QWERTY keyboard. `F X L` means press F, then X, then L without Shift. `Shift+D` means hold Shift while pressing D. The dotted circle in a chart is a display aid for a combining sign; it is not inserted into your text.

## Complete letter-key map

| Layer | Q | W | E | R | T | Y | U | I | O | P |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ট | দ | ল | ◌ো | । | শ | স | প | য | গ |
| Shift | ঢ | ঙ | ঠ | ◌ৈ | ◌ঃ | ঘ | ধ | ◌ং | ণ | ◌ঁ |

| Layer | A | S | D | F | G | H | J | K | L |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ব | ন | র | ◌া | ◌ী | জ | ক | ◌ে | ◌ি |
| Shift | ফ | ড় | ষ | ◌ূ | ঢ় | ড | ছ | ভ | অ |

| Layer | Z | X | C | V | B | N | M |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | হ | ম | ◌্ | ◌ু | চ | য় | ত |
| Shift | ৎ | ঞ | ◌ৃ | ◌ৌ | ঝ | খ | থ |

## Vowel keys

| Physical key | Sign after a consonant | Full vowel elsewhere |
| --- | --- | --- |
| F | া | আ |
| L | ি | ই |
| G | ী | ঈ |
| V | ু | উ |
| Shift+F | ূ | ঊ |
| Shift+C | ৃ | ঋ |
| K | ে | এ |
| Shift+R | ৈ | ঐ |
| R | ো | ও |
| Shift+V | ৌ | ঔ |
| Shift+L | — | অ |

At the start of a word, or after a vowel/sign/other non-consonant context, the vowel key produces the full vowel. After a consonant it produces its sign. This behavior is implemented in Kala's current fixed-layout engine; you do not need a special timing setting.

## Type a sign or full vowel

1. For **কি**, press **J** for ক, then **L** for ি. The result is কি.
2. For **ই** at a fresh word, press **L** once.
3. For **আমি**, press **F X L**: আ + ম + ি.
4. For **অ**, press **Shift+L**.
5. To put a full vowel immediately after a consonant, press the corresponding vowel key **twice**. For **বই**, press **A L L**.

The second press changes the sign into the full vowel: ব → বি → বই. This repeated-key rule applies to the same vowel key in the current word, not to an arbitrary double click anywhere in the document.

## Repeated vowel presses

When a run begins immediately after a consonant, presses pair from the end. One unpaired press gives the sign; each pair gives a full vowel:

| After ক, press L… | Output | Explanation |
| --- | --- | --- |
| Once | কি | Sign |
| Twice | কই | One full vowel |
| Three times | কিই | Sign + full vowel |
| Four times | কইই | Two full vowels |
| Five times | কিইই | Sign + two full vowels |

At a fresh word, repeated L presses add independent ই vowels instead. Another key, Space, or a composition reset ends the run. There is no speed/timer threshold for this rule.

## Hasant and conjuncts

**C** produces hasant (্). Use consonant → hasant → consonant in Unicode order:

1. For **ক্ষ**, press **J C Shift+D**: ক + ্ + ষ.
2. For **ক্র**, press **J C D**: ক + ্ + র.
3. For **ত্র**, press **M C D**: ত + ্ + র.

Use Jhor's context/double-press vowel rules for full vowels. You do not need Goti's hasant + sign recipe for that purpose.

## Practice words

Start each example as a fresh word. The table describes layout composition; enabled corrections or personal shortcuts can affect the completed word when you press Space.

| Text | Keys in order |
| --- | --- |
| আমি | F X L |
| কী | J G |
| বই | A L L |
| এবং | K A Shift+I |
| তিনিই | M L S L L L |
| আকাশ | F J F Y |
| ক্ষ | J C Shift+D |
| ক্র | J C D |

For a first practice session, repeat আমি, কী, and বই slowly. Then try তিনিই to understand the three-press rule. Accuracy is a more useful first goal than speed on an unfamiliar map.

## Numbers, punctuation, and modifiers

The unshifted number row and numeric keypad produce Bangla digits ০–৯. Shift on the number row keeps the US symbol mappings. Comma, full stop, semicolon, slash, quotes, brackets, and other mapped symbol keys retain their US positions. Danda **।** is **T**.

Jhor uses normal and Shift layers. Caps changes letter mappings and Shift reverses Caps for letters; leave Caps off when following the examples. It has no additional AltGr layer. ZWNJ, ZWJ, ঽ, ॥, —, and ৳ have no dedicated key in this version. Use another input method or paste those characters when needed.

## Editing an existing word

Jhor obtains vowel context from the word Kala is currently composing. Backspace retains remaining current-word context, but clicking into existing text or moving the caret can reset it. The first vowel key after that reset may produce a full vowel rather than a sign.

If you want to add/change a vowel sign in an old word, retype the relevant consonant and vowel together, replacing the old portion so you do not duplicate the consonant. Check the result in your target app. Jhor does not infer arbitrary earlier document context from a click alone.

## Why its design is scientific

The design uses an explicit ergonomic cost model, large text corpora, document-level held-out tests, 512 search runs, and independently checked scores. Its modeled advantage remained visible on Wikipedia, newspaper text, and an unseen news set. The current mixed-corpus layout is **best found**, while the earlier Wikipedia-only predecessor has a separately scoped certified bound.

Read the [research page](research-and-comparison.md) for the exact objective, benchmark variants, all results, and remaining human-study limits. The evidence supports describing Jhor as a scientifically designed, data-driven layout with the lowest modeled effort among those tested. It does not establish “the most scientific layout” across all designs or measured superiority for every typist.

**CC0:** Kala Jhor’s original layout maps are free to use, adapt, and share without permission or royalties. Read the [layout dedication](../reference/original-layout-license.md).
