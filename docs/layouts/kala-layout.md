# Kala Layout — one map, Goti and Jhor styles

[Guide index](../../USER_GUIDE.md) · [Research and comparison](research-and-comparison.md) · [Release availability](../FEATURES_AND_RELEASES.md)

**Kala Layout is one provisional shared arrangement, with Goti and Jhor as typing styles.** Its research identifier is B01/P01, `shared-76c9b9dbfc689d0b`, selected on 28 October 2026. Switching styles changes the vowel rules; every symbol stays on the same key and layer.

## Availability: check your installed map

The 29 October 2026 audit found that updated Kala source assets, rebuilt Release assets, Typing Master source assets and rendered keyboard legends all match B01: **zero position differences in either style**. The previously installed Kala copy still had the original separate maps: **43 of 52 Goti positions and 39 of 52 Jhor positions differ**. That copy still needs an application update. Updating this website does not update an installed application or replace published installers.

Check Kala's on-screen keyboard before following this guide: B01 has **hasant on S**, **ি on A**, and **danda on Z** in both styles. The layout-file version **1.0** identifies the file format, not B01. Check the release notes for explicit shared-layout support. If your map differs, use the historical [Goti guide](kala-goti.md) or [Jhor guide](kala-jhor.md) until you update.

Practise the shared arrangement online with [Kala Typing Master](https://robispider.github.io/kala-typing-master/), and read its [research explanation](https://robispider.github.io/kala-typing-master/research/). Browser practice is separate from installing Kala for Windows.

## Shared letter-key map

These are physical US QWERTY positions. Keep Caps off. A dotted circle makes a combining sign visible; it is not typed.

| Layer | Q | W | E | R | T | Y | U | I | O | P |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ◌ী | হ | ◌ু | য | ট | শ | স | প | ম | দ |
| Shift | ঢ় | ◌ৌ | ◌ৃ | ৎ | ঢ | ঘ | ণ | ◌ং | ফ | ঠ |

| Layer | A | S | D | F | G | H | J | K | L |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | ◌ি | ◌্ | ◌া | র | গ | জ | ক | ◌ে | ব |
| Shift | ◌ঁ | ◌ূ | অ | ষ | ঝ | ড | থ | ভ | চ |

| Layer | Z | X | C | V | B | N | M |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Normal | । | ◌ো | ন | ল | ছ | য় | ত |
| Shift | ◌ঃ | ◌ৈ | ড় | ঙ | ঞ | খ | ধ |

Bangla digits remain on the number row and numeric keypad; US punctuation keeps its fixed positions. There are normal and Shift layers. ZWNJ, ZWJ, ঽ, ॥, — and ৳ have no dedicated key. ড়, ঢ় and য় can use canonically equivalent Unicode spellings in the applications.

## Two typing styles

**Goti (A):** after a consonant, type the vowel-sign key. For a full vowel, press **S** (hasant) and then its sign. **Shift+D** gives অ. This follows the established modern fixed-layout tradition of Ekushey UniJoy and Avro/OmicronLab.

**Jhor (D):** a vowel key produces its sign after a consonant and a full vowel elsewhere. Immediately after a consonant, press the same vowel key twice for a full vowel. Three presses give sign + full vowel; four give two full vowels. At a fresh word, each press gives another full vowel. Another key, Space or a composition reset ends the run. This has no timing threshold. Context-vowel entry has prior art in Avro; see [typing-style heritage and scope](https://robispider.github.io/kala-layout/en/styles/).

Start each example as a fresh word. **S** joins consonants in both styles: **J S Shift+F** gives ক্ষ; **J S F** gives ক্র. Enabled corrections may affect completed words at Space.

| Text | Goti keys | Jhor keys |
| --- | --- | --- |
| আমি | S D O A | D O A |
| কী | J Q | J Q |
| বই | L S A | L A A |
| এবং | S K L Shift+I | K L Shift+I |
| তিনিই | M A C A S A | M A C A A A |
| আকাশ | S D J D Y | D J D Y |

## What the evidence establishes

The audit independently replayed **45,526 certificate decisions** and checked **13,012 typing sequences through each application's real decoder**. All passed. These decoder checks do not establish external-app compatibility or measured human typing speed.

The [local certificate](https://robispider.github.io/kala-layout/en/certification/) rules out an eligible improvement to one style's R without worsening the other's R among all alternatives moving two or three symbols. It uses the **relaxed shared eligibility policy**: at most **+0.75% effort** and **+7.5% within-word same-finger distance** versus each original same-style arrangement on the specified training mix. **R is calibrated separately by style and must not be averaged, added or compared across styles.** This is local non-dominance, not global optimality or proof of globally fastest typing. B01 remains provisional.

| Previously examined held-out mean | Goti | Jhor |
| --- | ---: | ---: |
| Modeled effort J1 | 1.854428 | 1.808080 |
| Less modeled effort than the tested UniJoy variant | 33.709% | 35.366% |
| Effort increase versus original same-style map | 0.608% | 0.447% |
| Cross-space same-finger distance increase versus original | 25.750% | 3.923% |

These are model comparisons, not typing-speed or comfort results. The intended benefit is one remembered map; existing users must relearn positions. Previously examined held-out sources are exploratory reuse, not fresh independent confirmation. Read [why the map is shared, including its costs](https://robispider.github.io/kala-layout/en/shared/) and the [publication descriptor](https://github.com/robispider/kala-layout/blob/main/data/layout-publications/shared-v1.json).

## Licence, practice and updates

The shared B01 map and research exports use the [MIT licence](https://github.com/robispider/kala-layout/blob/main/LICENSE). The earlier separate maps retain their [CC0 dedication](../reference/original-layout-license.md). The application and third-party material keep their own terms.

Use [Kala Typing Master](https://robispider.github.io/kala-typing-master/) for browser practice and follow the [Kala Bangla Keyboard Facebook page](https://www.facebook.com/kalabanglakeyboard) for project updates. For application availability, read [release status](../FEATURES_AND_RELEASES.md) and [Kala releases](https://github.com/robispider/kala-releases/releases).
