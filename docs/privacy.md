# Kala privacy notice

Last updated: **15 October 2026**.

Kala's ordinary typing, settings, personal words, diagnostics, and learning progress stay on your computer. A separate **Typing skill check** in research-enabled builds can send a recording only when you choose **Send for research** for that check. You can keep your local result without sharing.

**Shared typing-check data will be retained for research and may be included in a publicly available research dataset.** This includes the text you enter in the check and its typing measurements. Do not enter your name or other private information if you do not want it shared.

This notice describes the current application and research service. Not every published installer includes the research check, and the service can close collection. See [feature and release availability](FEATURES_AND_RELEASES.md).

## Ordinary typing and local data

Bangla composition, corrections, suggestions, and spelling marks run locally. Kala uses temporary session text to support these features. It does not upload your documents or typing from other applications for research.

Preferences, deliberately saved personal words, imported layouts, numeric learning results, and diagnostics are stored in your Windows user profile. Current app diagnostics record event codes, counts, and timings rather than typed words or sentences. You decide whether to export personal words or share a diagnostic report. See [Settings, privacy, and support](07-settings-privacy-and-support.md) for storage locations and older diagnostic-file limitations.

## When the research check records and sends

The check studies Bangla typing speed, errors, editing, and keyboard-layout performance. Corrections, personal replacements, suggestions, and spelling marks are off in the check field so the recording reflects your input.

Capture is limited to the check window during its readiness word and active, unpaused typing. Switching away or pausing stops capture. The readiness word is recorded but excluded from the measured trial. Kala does not capture a research key stream from other apps.

After the result, **See what is sent** provides a read-only preview. Choose **Don't send** or close the check to discard the raw recording from memory. Numeric results and learning evidence may remain locally. **Send for research** saves that check for background upload; sharing is asked separately each time.

## What we collect when you share

| Data | Included information |
| --- | --- |
| Check text | Displayed sentences, your final text, inserted/deleted/replaced text, edits, and selection positions |
| Typing measurements | Physical key presses/releases, modifier states, held-key repeats, key positions, and relative timing |
| Layout | Kala layout name/id, bundled/imported status, input family, and mapping fingerprint; not the imported layout file |
| Session conditions | Laptop or separate keyboard category, known keyboard geometry, Kala/Windows versions, and start time rounded to the minute |
| Research metadata | Random contributor/session numbers, session count, prompt/protocol versions, pauses, completion, quality flags, and result summary |

A random contributor number groups repeat checks from the same installation. It does not ask for your real name. However, the exact text you enter is part of the recording: if you type a name or other private information, that information can be included. An imported layout's name can also contain information you supplied. A random number does not make such text anonymous.

## What we do not collect

- We do not ask for your name, email, phone number, age, gender, address, location, or other personal-profile answers.
- We do not collect keyboard serial numbers, device identifiers, hardware fingerprints, or USB/Bluetooth details.
- We do not collect clipboard contents, document titles, or text and key events from other applications as part of the research check.
- We do not upload your personal-word list, ordinary diagnostic reports, or full learning history with a check.
- We do not include an IP address in the stored research recording.

Network services necessarily see an IP address while handling a request. The research receiver uses it temporarily for rate limiting and logs request status and duration rather than text, identifiers, headers, or IP addresses. Proxy and hosting behavior depends on their configuration.

## Research use, publication, and retention

The purpose is to analyze Bangla typing performance and improve keyboard layouts and learning tools. **Recordings shared under this notice may become part of a public research dataset, including their check text and timing data.** Publication is a planned research use; this notice does not claim a dataset has already been released.

Shared records are kept for ongoing research and dataset preparation, with **no fixed automatic expiry**. The receiver itself does not automatically publish a dataset. No publication date or separate backup-expiry period is specified here.

Because the research data can be made public, other people may download and reuse a released dataset. Deleting a record from the research service cannot guarantee removal of copies already downloaded or published elsewhere. Check your recording before sharing and use the supplied sentences rather than private material.

## Storage and your deletion controls

Before Send, the raw recording stays in memory. After Send, a pending copy is stored on your computer and uploaded over HTTPS to Kala's configured research service. A confirmed upload removes that local raw copy and leaves a receipt. Retry limits stop repeated attempts; they do not necessarily erase an unsent local copy.

The research receiver stores the original recording, receipt metadata, and contributor proof in private storage. The installation keeps a deletion secret: uploads send a derived proof, and only a deletion request sends the secret itself. No research account or password is needed.

In a research-enabled build, open **Settings → Research**:

1. **Delete pending recordings** removes local copies waiting to upload.
2. **Delete local check history** clears local numeric results and seen-prompt history; it does not withdraw shared records.
3. **Delete my shared data** requests deletion of server-held recordings for the current contributor number. Wait for an accepted response; a connection failure does not confirm deletion.
4. Request deletion before **Start fresh contributor number**. Starting fresh replaces the old secret, so this installation can no longer prove ownership of its previous number.

On accepted withdrawal, the receiver removes that contributor's recordings and receipt metadata. A minimal proof/deletion marker remains to block late uploads and verify repeat deletion requests. Deletion state must survive backup recovery. This control does not recall public dataset copies or guarantee immediate erasure of existing backups.

## Website hosting and contact

This documentation site is hosted on GitHub Pages. Visiting it does not send a typing-check recording. GitHub handles website traffic under its [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

The Kala project is maintained through the [robispider account](https://github.com/robispider) and [Kala releases repository](https://github.com/robispider/kala-releases). For questions about this notice, use [Kala Issues](https://github.com/robispider/kala-releases/issues). Issues are public: do not post recordings, personal documents, contributor numbers, or deletion secrets. Use the in-app deletion control for withdrawal.

## Changes to this notice

The date above identifies this version. A website update does not change an older installer's features. Review this notice and the data preview before sharing a new recording.
