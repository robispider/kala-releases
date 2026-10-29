# How Kala Jhor and Kala Goti were built and compared

[Guide index](../../USER_GUIDE.md) · [Jhor typing guide](kala-jhor.md) · [Goti typing guide](kala-goti.md) · [Evidence snapshot](../reference/layout-research-snapshot.json)

Kala Jhor and Kala Goti are scientifically designed, data-driven Bangla layouts from **Bangla-DH Pure**. Their symbol positions were selected by a defined optimization process and evaluated on text that was held out from that process.

**The recorded result:** Jhor has the lowest average modeled finger effort among the eight fixed layouts tested; Goti is second. Compared with the tested UniJoy variant, Jhor uses **35.7% less modeled effort**, and Goti **34.1% less**, averaged equally over three held-out text sets.

“Most scientific” is not a ranking established by these tests. The evidence is stronger and more specific: a reproducible ergonomic model, large corpora, explicit typing rules, extensive searches, independent verification, scoped mathematical bounds for earlier layouts, and disclosed limits. Real typing speed, error rates, comfort, learning time, and superiority over every possible layout remain unmeasured or unproven.

**Repeat or challenge it:** the research code, scorer, text-dataset lockfile, result reports, and layout files are public in the [kala-layout repository](https://github.com/robispider/kala-layout), with instructions to rerun the search and submit a layout of your own.

The [Kala Layout research website](https://robispider.github.io/kala-layout/en/) brings together the [method and checks](https://robispider.github.io/kala-layout/en/how/), [reproduction guide](https://robispider.github.io/kala-layout/en/reproduce/), and [open layout challenge](https://robispider.github.io/kala-layout/en/challenge/). To use the results, follow the [Jhor](kala-jhor.md) or [Goti](kala-goti.md) typing guide, then [practise with Learn](../08-learning-module.md) in Kala.

## 1. Start with an existing ergonomic model

The project used the [Colemak Mod-DH typing-effort model](https://colemakmods.github.io/mod-dh/model.html) and its [layout-comparison approach](https://colemakmods.github.io/mod-dh/compare.html). The grid models reach distance, finger factors, lateral movement, and keyboard geometry; pair costs model awkward consecutive keys. These weights include human judgment, as the upstream pages explain.

Before searching Bangla layouts, Phase 1 reproduced **all 60 published comparison values across 15 English-layout rows**. The grid reconstruction recovered the unpublished distance parameter as **1.12** and matched **138 of 142** published one-unit key values at one decimal; all one-unit deviations were within **0.073**. The project documented remaining rounding/source discrepancies rather than treating the geometry as universal human constants.

The English numbers establish reproduction of the reference model. They are not Bangla-layout rankings and are not compared numerically with the Bangla scores below.

## 2. Define the Bangla typing problem

The current search uses a standard **ANSI row-staggered keyboard**, the **26 letter keys**, and **two layers** (normal and Shift). It assigns **52 symbol labels to 52 key/layer slots**. Number-row/keypad digits and US punctuation have fixed mappings outside that search.

Conjuncts are entered as consonant + hasant + consonant. Unicode units, vowel-entry rules, repeated-key behavior, and NFC normalization are defined before scoring. This lets the evaluation count the actual keystroke recipes instead of treating every drawn Bangla glyph as a single key.

The project tested four vowel styles: hasant + sign (A), sign double press (B), full-vowel double press for signs (C), and context vowels (D). The two chosen mixed-corpus layouts became **Goti = A** and **Jhor = D**. See their guides for exact recipes.

The modeled assignment space has **52! ≈ 8.07 × 10^67** possibilities. The search did not enumerate all of them.

## 3. Prepare and split real Bangla text

Wikipedia prose and newspaper articles were normalized and deduplicated, then split **by document**, with roughly 10% held out. Separate training weights prevent the larger newspaper corpus from overwhelming Wikipedia.

| Split | Articles | Running word tokens | Text units, including space |
| --- | ---: | ---: | ---: |
| Wikipedia training | 171,685 | 58,136,180 | 390,391,661 |
| Prothom Alo newspaper training | 386,205 | 110,175,696 | 717,543,857 |
| Wikipedia held-out | 19,063 | 6,604,805 | 44,388,875 |
| Newspaper held-out | 43,022 | 12,286,444 | 80,039,818 |
| BARD unseen-news held-out | 5,131 | 1,098,306 | 7,209,251 |

Training used **557,890 articles and 168,311,876 word tokens**. Evaluation used **67,216 held-out articles and 19,989,555 word tokens**. Counts are running tokens, not unique vocabulary sizes.

BARD originally overlapped heavily with the newspaper collection: about **81.3% of its sentences** were shared. Articles sharing any sentence with the newspaper set were dropped to form the `bard-novel` subset. That subset was never used in the mixed-layout search. This is useful unseen news evidence; it does not establish coverage of every Bangla writing domain.

## 4. Score effort, then search

The Bangla objective is **J1 = E1 + E2 + M**, normalized by text units including space:

| Component | Meaning |
| --- | --- |
| **E1** | Effort of the physical keys used, including extra presses required by vowel recipes |
| **E2** | Consecutive-key penalties/benefits under the frozen finger model |
| **M** | Additional Shift cost |
| **J0 = E1 + E2** | Effort before the Bangla Shift extension |

Space is a thumb action with zero modeled effort. Shift is charged as an additional press of the other hand's Shift key for each shifted symbol. The model does not account for holding Shift across a run and adds no extra bigram penalty for the Shift press. Same-symbol repetition is excluded from the pair penalty but still costs its key presses. The original model's middle–index benefit is retained.

The training objective is **0.5 × Wikipedia J1 + 0.5 × newspaper J1**, weighted per corpus rather than pooled by size. Each of A and D had **512 seeded search runs**, each with **1,000,000 annealing moves**, followed by steepest descent and **1,000 iterated-local-search iterations**, plus polish/confirmation runs. Thus each style evaluated **512 million annealing moves plus local search**; that count does not mean 512 million distinct layouts or exhaustive coverage.

| Final layout | Mixed training J1 | Runs reaching the best | Result class |
| --- | ---: | ---: | --- |
| Kala Jhor (D) | 1.808796 | 24 / 512 | Best found |
| Kala Goti (A) | 1.849686 | 36 / 512 | Best found |

Confirmation runs found no improvement. Multiple seeds reaching the same layout are convergence evidence, not a global optimality proof.

## 5. Complete fixed-layout comparison

The final bundled metadata records this leaderboard. **Lower J1 is better.** The average is the arithmetic mean of the three held-out scores; it is not weighted by corpus size. Existing layouts receive their best recorded grid score for each corpus, so the comparison does not force them onto an unfavorable fingering/grid.

| Rank | Layout | Wikipedia J1 | Newspaper J1 | Unseen news J1 | Average J1 | Score | Effort index |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | **Kala Jhor** | 1.8348 | 1.7822 | 1.7830 | **1.8000** | 100.0 | 64.3 |
| 2 | **Kala Goti** | 1.8689 | 1.8300 | 1.8308 | **1.8432** | 97.7 | 65.9 |
| 3 | Windows Default | 2.1435 | 2.1510 | 2.1549 | 2.1498 | 83.7 | 76.8 |
| 4 | Probhat | 2.6022 | 2.5337 | 2.5299 | 2.5553 | 70.4 | 91.3 |
| 5 | Munir Optima (uni) | 2.5898 | 2.5783 | 2.5885 | 2.5855 | 69.6 | 92.4 |
| 6 | Bornona | 2.6534 | 2.5923 | 2.5900 | 2.6119 | 68.9 | 93.4 |
| 7 | UniJoy | 2.7976 | 2.7948 | 2.7998 | 2.7974 | 64.3 | 100.0 |
| 8 | National (Jatiya) | 2.8913 | 2.8503 | 2.8554 | 2.8657 | 62.8 | 102.4 |

**Score = 100 × lowest average / layout average. Effort index = 100 × layout average / UniJoy average.** A score of 100 identifies the lowest effort in this table; it is not a speed, accuracy, or quality percentage. Jhor's 64.3 effort index corresponds to a 35.7% modeled reduction from UniJoy; Goti's 65.9 corresponds to 34.1%.

Using those recorded averages, the modeled effort reductions against each tested existing layout are:

| Compared with | Jhor reduction | Goti reduction |
| --- | ---: | ---: |
| Windows Default | 16.3% | 14.3% |
| Probhat | 29.6% | 27.9% |
| Munir Optima (uni) | 30.4% | 28.7% |
| Bornona | 31.1% | 29.4% |
| UniJoy | 35.7% | 34.1% |
| National (Jatiya) | 37.2% | 35.7% |

Each percentage is `100 × (1 − Kala average / compared-layout average)`, rounded to one decimal. It carries the same model, variant, and coverage limits as the leaderboard.

### Which public layout variants were tested?

| Recorded name | Recorded provenance |
| --- | --- |
| Windows Default | The imported Avro fixed-layout file credited to **BrownVinci**; the name does not mean every Windows Bangla input method |
| Probhat | Imported Unicode fixed layout credited to **Shabab Mustafa** |
| Munir Optima (uni) | Imported Unicode fixed layout credited to **Shabab Mustafa** |
| Bornona | Imported fixed layout credited to **The Safeworks** |
| National (Jatiya) | Imported fixed layout credited to **Bangladesh Computer Council (BCC)** |
| UniJoy | Kala's built-in UniJoy mapping; the repository's Bijoy-named file has the same keys and was not treated as an independent Bijoy benchmark |

These public-layout variants were present in Kala's layout collection when the recorded evaluation ran. Imported Avro formatting used vowel formatting, reph movement, chandrabindu ordering, and Bangla keypad enabled. Their normalized layout-file hashes are preserved in the [evidence snapshot](../reference/layout-research-snapshot.json).

The comparison covers these **fixed layouts only**. Avro Phonetic and other phonetic input methods do not have an equivalent fixed key map and are excluded. It is not an exhaustive comparison of all publicly available layouts, every historical variant, or every app implementation. See [OmicronLab's Avro Keyboard description](https://www.omicronlab.com/avro-keyboard.html) for the original project's layout ecosystem.

### Final-layout effort components

| Layout / held-out set | Key effort E1 | Pair term E2 | Shift M | J1 | Key presses per non-space text unit |
| --- | ---: | ---: | ---: | ---: | ---: |
| Jhor / Wikipedia | 1.5116 | 0.0354 | 0.2878 | 1.8348 | 1.0020 |
| Jhor / newspaper | 1.4750 | 0.0391 | 0.2681 | 1.7822 | 1.0026 |
| Jhor / unseen news | 1.4818 | 0.0386 | 0.2626 | 1.7830 | 1.0026 |
| Goti / Wikipedia | 1.5410 | 0.0313 | 0.2967 | 1.8689 | 1.0385 |
| Goti / newspaper | 1.5225 | 0.0406 | 0.2669 | 1.8300 | 1.0423 |
| Goti / unseen news | 1.5291 | 0.0403 | 0.2613 | 1.8308 | 1.0421 |

Rounded components can differ from their rounded total by 0.0001. Goti's full-vowel recipe needs extra presses; Jhor's context rule usually avoids those. Some existing layouts emit several units on one key, so Jhor/Goti do not beat every baseline on raw keypress count even though they lead this modeled effort table.

### Coverage caveat

The scorer escapes units a layout cannot type; escaped units remain in the denominator and have zero modeled effort. This favors layouts with more unsupported text. In the recorded Wikipedia set, the Windows Default variant escaped about **2.953%** of units, versus **0.021%** for style D and **0.018%** for style A. The caveat accompanies its score rather than silently treating all variants as equally complete.

Two layers in Jhor/Goti leave ZWNJ, ZWJ, ঽ, ॥, —, and ৳ without dedicated keys. Escapes and multi-unit keys also affect keypress-count comparisons. The model scores keyboard recipes, not fonts, final document rendering, caret safety, or app compatibility.

## 6. Verification and mathematical results

Recorded checks include independent text-based scoring, Unicode encode/decode round trips, scorer/objective agreement, and hash-pinned inputs. Phase 4's independent verifier matched the integer objective exactly for its training scope.

For the earlier **Wikipedia-only Phase 3 layouts**, Phase 4 recorded:

| Earlier style | Best J1 / upper bound | Certified lower bound | Gap | Scope |
| --- | ---: | ---: | ---: | --- |
| A, predecessor of Goti | 1.867435 | 1.786935 | 4.31% | Wikipedia-training J1; 52 symbols/slots; fixed model/grid |
| D, predecessor of Jhor | 1.834624 | 1.757831 | 4.19% | Same scope, with D's vowel rule |

The gap is `(upper − lower) / upper × 100` here. It bounds how much a better layout could lower the current upper-bound cost, expressed relative to that cost; it is not a claim that the found cost is only that percentage above the unknown optimum.

Within separately stated neighborhoods, the predecessors were proven unimprovable by moving at most five labels, freeing the top-20 labels, or freeing the Shift layer while other assignments stayed fixed. **Neither whole problem was proven globally optimal.** A 1,000-sample parameter-sensitivity study found predecessor D lowest among styles A–D in every sample; A/B/D beat the recorded baselines across those samples.

**The final mixed-corpus Jhor and Goti layouts were not re-certified.** Jhor retains the predecessor's base layer but has Shift changes; Goti has base and Shift changes. The predecessors' bounds, local proofs, and sensitivity claims must not be transferred as certificates for the current mixed objective.

### Recorded Goti export/decoder checks

The export verification used a port of Kala's fixed-layout engine and skipped word types requiring unavailable keys:

| Held-out set | Word types examined | Typed exactly | Skipped | Failures among typed words |
| --- | ---: | ---: | ---: | ---: |
| Wikipedia | 200,000 | 191,791 | 8,209 | 0 |
| Newspaper | 200,000 | 195,614 | 4,386 | 0 |
| Unseen news | 100,254 | 97,916 | 2,338 | 0 |

It also recorded **20,000/20,000 random key sequences** agreeing with the research decoder. The exported Jhor record verifies import/key-map structure but does not contain that same Goti engine-port word test. Jhor's context-vowel engine is now implemented in Kala and has dedicated fixture cases for context, repeated runs, and native Backspace. No fresh app test execution is implied by this guide.

The machine-readable snapshot retains the recorded export check and source hashes. These are algorithm/decoder checks, not timed human trials or live Word/Photoshop validation.

## 7. What remains to establish

Human trials are still needed for actual speed, errors, learning curves, sustained comfort, and whether the Shift/finger assumptions fit different typists. Literature, government writing, conversational text, other keyboard geometries, and alternative model weights can produce different conclusions.

The scientific claim is therefore: **Kala Jhor and Kala Goti were systematically optimized and independently evaluated, and rank first and second under the recorded fixed-layout model comparison.** The full scorer, search code, and reproduction instructions are public in the [kala-layout repository](https://github.com/robispider/kala-layout); the result snapshot included here documents the current claims. The Kala application source is a separate matter and remains planned for future publication.


[Typing practice](https://robispider.github.io/kala-typing-master/).
