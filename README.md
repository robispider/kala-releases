# Kala for Windows

Kala is a Bangla keyboard for Windows. It lets you type Bangla in everyday apps with a phonetic layout or a familiar fixed-key layout.

**Kala is free to use and share.** The source code is planned to be made available in the future. This repository currently provides Windows releases and user documentation; it does not yet contain the application source code.

## Download

Visit [Kala releases](https://github.com/robispider/kala-releases/releases) and download the setup `.exe` from a release. The current file is `KalaSetup-v0.1.0-alpha.1.exe`. The current release, **v0.1.0-alpha.1**, is a pre-release, so some features may still have issues.

Kala's setup package is for 64-bit Windows. It installs for your Windows account and does not require administrator permission or a separate .NET installation. The current setup file is unsigned, so Windows may show a SmartScreen warning.

## Install and start typing

1. Run the downloaded Kala setup `.exe` and follow the setup wizard. Choose whether to add a desktop shortcut; a Start Menu shortcut is included.
2. Open Kala and choose **Avro Phonetic** to type Bangla using Roman spellings, or **UniJoy** to use that key layout.
3. Click a text field in the app where you want to type, then press **Ctrl + Alt + V** to turn Bangla on for that app.
4. Type. Press the shortcut again to switch back to ordinary typing.

The full [user guide](USER_GUIDE.md) covers setup, layouts, corrections, settings, and troubleshooting.

## Features

- Type Bangla in Windows applications with the physical or on-screen keyboard.
- Choose Avro Phonetic or UniJoy, and import supported Kala or Avro layouts.
- Use optional autocorrection, spelling help, suggestions, and personal words.
- Keep per-user settings and personal data when updating or uninstalling.

Some behavior depends on the app and text field. Password, read-only, or protected fields do not receive Kala's Bangla input. See the user guide for details.

## Avro Phonetic credit

Kala's Avro Phonetic implementation uses the Avro Phonetic layout and rules to mimic Avro's typing behavior. Thank you to [OmicronLab](https://www.omicronlab.com/) for creating Avro Keyboard and Avro Phonetic and for sharing this work with the Bangla typing community. Learn more in the [Avro Keyboard repository](https://github.com/omicronlab/Avro-Keyboard).

## Updates and feedback

Check the [releases page](https://github.com/robispider/kala-releases/releases) for updates. To report a problem or request help, open an [Issue](https://github.com/robispider/kala-releases/issues) and include your Kala version, Windows version, the app you were using, and steps to reproduce the problem. Do not include passwords or private document text.

## Repository contents

- `README.md` — project overview and download instructions
- `USER_GUIDE.md` — installation and everyday use
- `LICENSE` — current project note about free use and planned source availability

The source code will be published in the future. Until then, this repository is for downloading Kala releases and reading its documentation.
