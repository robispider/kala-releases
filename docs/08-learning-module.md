# 8. Learning module — availability and use

[Guide index](../USER_GUIDE.md) · [Feature and release status](FEATURES_AND_RELEASES.md)

**Learn is included in the standard release.** The release decision confirmed on **12 October 2026** includes the learning module, its interface resources, and built-in course packs. Open **Learn** to begin. Older installers may lack this module; check your installed version and update when the new installer is available.

The module teaches layout use inside explicit practice sessions. It does not collect practice evidence from your ordinary typing in other apps. Bangla layout practice and the research optimization that produced Jhor/Goti are different activities.

## Set up learning

1. Open **Learn** and choose its setup action.
2. In **Language and layout**, choose a compatible course pack and layout. Current built-in packs cover Bangla core typing and English touch typing; English pack mappings include QWERTY/Colemak through the Windows input arrangement.
3. Select **Physical keyboard** or **On-screen keyboard**. Their progress is kept separately.
4. In **Check your keyboard**, choose **US (ANSI)** or **UK / Europe (ISO)** geometry and type the requested key example.
5. If output differs, check the layout and practice mode. For an English arrangement, select the matching layout in Windows; Kala does not change Windows keyboard settings.
6. In **Goal and time**, choose **New to this**, **Switching layouts**, or **Coming back**, then a goal and **5, 10, or 15 minutes** per day.
7. Optionally state how often you look at the keys. This is self-reported; Kala cannot see your hands.
8. In **Starting point**, choose **Start placement check** or **Skip and start from the basics**.

Placement suggests where to begin; it does not lock every other lesson or give a universal typing qualification. Layout, geometry, course, and input surface identify a learning configuration, so results from different configurations are not blended.

## Do a daily session

1. Open **Learn → Today**.
2. Review the recommended lesson, remaining requirements, and reasons for the planned blocks.
3. Choose a duration: **5, 10, or 15 minutes**.
4. Start the session.
5. Type the displayed text in **Your typing** and finish each requested word as instructed.
6. Follow **Continue** through the included blocks. A daily plan can contain Warm-up, Review, Focus, New keys, Mixed text, and Exit check; some blocks are omitted to fit time or readiness.
7. Read Results and follow its suggested next action, retry, or return to the course map.

**Pause** preserves your place and excludes paused time. **Resume** continues; **End session** finishes early. During learning/setup windows, Kala composes the layout but disables automatic corrections, spelling-error replacements, saved-shortcut expansion, and suggestions so they do not supply answers.

## Guidance and valid checks

Practice offers **Show next key**, **Hint when asked**, and **On my own** where the current block permits them. **Hint · counts as help** distinguishes assisted success from independent evidence. Some blocks can be repeated with **Repeat this block**.

The module distinguishes **First try**, **Fixed**, **With help**, and **Missed**. Temporary letter changes while phonetic text is composing are not automatically treated as mistakes. An independently scored check requires appropriate evidence: paste, focus loss, a layout/mode change, unexpected editing, or other invalidation can make a check unscored. Read its explanation and retry rather than treating the final text as independent mastery.

## Explore the course map

1. Open **Course map**.
2. Select a stage and a lesson/step.
3. Read the selected step's goal, key content, recorded performance, required conditions, and recommended action.
4. Choose its practice or check action.
5. Use exploration when you want to try later material. Exploration does not automatically satisfy guided progression or earn a scored milestone.

The stage labels are Orientation, Keys and actions, Combinations, Words and transitions, Sentences and editing, Fluency, Your own text, and Specialist (optional). A stage label does not guarantee that every specialist activity is supplied. Available content comes from the compatible course pack.

## Practice problem keys

1. Open **Special practice for problem keys** from Today, Results, or Progress when available.
2. Confirm the displayed layout/configuration. If it differs from your active learning configuration, choose the offered configuration-switch action before starting.
3. Review recommended keys and the recorded/recent evidence. Sparse evidence is labeled rather than treated as a confident diagnosis.
4. Select a manageable set: up to **3 keys for 5 minutes**, **4 for 10 minutes**, or **6 for 15 minutes**.
5. Review the session preview and start.
6. Read the per-target results. Repeat remaining targets or choose the return-to-guided action.

Selecting too many targets disables Start until you reduce the set or choose a longer duration. Generated key drills are labeled drills; they are not represented as naturally occurring sentences.

## Read progress and results

Progress separates key coverage, independent first-try accuracy, retention/review status, response latency, and qualified passage speed. A single “percent complete” does not replace those measures.

1. Open **Progress** and choose the layout and physical/on-screen view.
2. Examine key states and valid checks.
3. Use **Try a 60-second passage (practice only)** for practice, or **Take a 60-second passage test** when a compatible assessment passage is supplied.
4. Choose **Export summary (CSV)** or **Print summary** to share totals/key states.
5. Use **Reset this layout's progress…** only after reading its confirmation.

Speed is expressed in correctly matched text units/graphemes per minute, not a directly comparable five-character English WPM score. The text scorer requires at least 60 seconds and 100 reference units for a qualified speed result; Today/Progress further require passage evidence on separate days. On-screen practice and untimed practice do not establish physical touch-typing speed.

## Manage course packs

1. Open **Library**.
2. Expand a pack to inspect compatibility and contents.
3. Use **Import** with a `.kalapack`, `.zip`, or supported `manifest.json` source.
4. Review installation errors if validation rejects a pack.
5. Use a pack's **Check** or **Update** action as needed.
6. Remove an imported pack after confirming the prompt. Built-in packs are not removable through this action.

Packs are local files. Kala does not automatically download courses or send progress. Importing a pack cannot supply a missing external IME or make an incompatible layout work.

## Learning settings and privacy

**Learning settings** is separate from Kala's main Settings. Implemented controls include session duration, break reminders, feedback timing, sound on mistakes, untimed practice, practice text size, screen-reader announcement choice, history retention, and local profile naming/export/deletion. Main Settings still controls interface language and theme.

Some exposed learning preferences are still partial in the current code: Show today's plan, Fade guidance, Suggested fingers, Hands, Daily streaks, Badges, Reduce motion, and Keep my last session's text are stored but do not each have a complete corresponding runtime effect. In particular, the current learning profile/session writer stores aggregates, not a retained transcript merely because the last-text preference is selected.

Learning files live under `%LOCALAPPDATA%\Kala\learning`. **Export** in Learning settings produces a learning-profile JSON copy; **Delete profile…** removes that learning profile after confirmation. These actions are distinct from Personal words' export/reset.

Learner pilots, content/license review, and live Windows practice validation remain pending. Release inclusion does not establish measured learning or speed gains. Report unexpected behavior with the exact version and learning configuration.
