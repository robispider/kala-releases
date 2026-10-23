# 1. Installation and first start

[Guide index](../USER_GUIDE.md) · [Next: everyday typing](02-typing-and-apps.md)

## What you need

The distributed setup package targets **64-bit Windows (x64)**. It includes its .NET runtime, so you do not need to install .NET separately. Setup installs for your Windows account and does not need administrator permission. Other operating systems and native ARM64/x86 packages are not supplied by this release.

This guide was reviewed against **v0.1.0-alpha.1**. The latest release is <!-- kala:latest -->**v0.9.0-alpha.1**<!-- /kala:latest -->, <!-- kala:latest-channel -->an **alpha pre-release**<!-- /kala:latest-channel -->; read its release notes before installing it.

## Download Kala

1. Download the latest setup file: <!-- kala:latest -->[`KalaSetup-v0.9.0-alpha.1.exe`](https://github.com/robispider/kala-releases/releases/download/v0.9.0-alpha.1/KalaSetup-v0.9.0-alpha.1.exe)<!-- /kala:latest -->.
2. To check the download, open the <!-- kala:latest -->[v0.9.0-alpha.1 release page](https://github.com/robispider/kala-releases/releases/tag/v0.9.0-alpha.1)<!-- /kala:latest --> and compare the file's SHA-256 checksum with `SHA256SUMS.txt` in its **Assets** list.
3. For an older version, open [Kala releases](https://github.com/robispider/kala-releases/releases), choose the release, and download its Kala setup `.exe` from **Assets**. GitHub's automatically generated **Source code (zip/tar.gz)** archives contain this release repository's files; they are not the installer or the application source.

The current installer is unsigned. Windows may display a SmartScreen warning. Confirm that the file came from the official release page before deciding to run it.

## Install

1. If Kala is already running, right-click its tray icon and choose **Exit Kala**.
2. Open the downloaded setup executable normally.
3. On **Welcome to Kala**, choose **Next**.
4. On **Ready to install**, review the installation folder: `%LOCALAPPDATA%\Programs\Kala`. This location is fixed by the installer.
5. Leave **Create a desktop shortcut** selected if you want one. A Start Menu shortcut is included either way.
6. Choose **Install** and wait for completion.
7. Choose **Open Kala** to launch it. Installation and launch are separate actions.

If setup fails, read the error shown in the wizard. The setup log is `%TEMP%\KalaSetup.log`. A failed replacement attempts to restore the prior installation; close Kala and resolve the reported cause before retrying.

## Complete the welcome steps

1. Read the introduction and continue.
2. Select a ready layout. **Avro Phonetic** turns Roman spellings into Bangla; **UniJoy**, **Kala Goti**, and **Kala Jhor** use fixed key arrangements. Jhor has context-sensitive vowel behavior. You can change this choice later.
3. Click the practice field and use the shortcut shown in Kala, initially **Ctrl + Alt + V**, to turn Bangla on for Kala's practice field. With Avro Phonetic, try `ami bangla`. For the fixed layouts, follow the key map or open the on-screen keyboard.
4. Try turning Bangla off and on again so you recognize the mode change.
5. Choose your assistance settings: **Fix clear spelling mistakes**, **Show suggestions below the cursor**, and **Remember my deliberate choices**. Each is separate and can be changed in Settings.
6. Choose **Start using Kala**.

**Skip for now** closes the welcome window without completing it. While welcome remains incomplete, **Get started** in the tray menu opens it again. Closing the welcome window does not stop Kala.

## Find Kala after starting it

Kala shows a loading splash, then stays in the tray near the clock. If Windows hides the icon, open the tray's hidden-icons area. Right-click Kala and choose **Open Kala** for the main window.

Opening Kala again brings the existing instance forward. You do not need to launch several copies. Closing the main window keeps Kala running; **Exit Kala** stops it completely.

## Start automatically with Windows

1. Open Kala's **Settings**.
2. Turn on **Start Kala when Windows starts**.
3. Kala will start when you sign in. Bangla still starts **off in every app** until you turn it on.

If Windows has disabled Kala as a startup app, review Windows' startup-app settings as well. See [Settings and support](07-settings-privacy-and-support.md).

## Update

1. Read the new release notes and download the new setup executable.
2. Exit the running Kala instance through its tray menu.
3. Run the new setup and install into the same per-user location.
4. Open Kala after setup finishes.

The installer keeps settings, personal words, and imported layouts in the separate `%LOCALAPPDATA%\Kala` data folder. Back up your personal choices before an update if they matter to you.

## Uninstall

1. Exit Kala.
2. Open Windows **Settings → Apps** and find **Kala** in the installed-app list. Depending on your Windows version, this list may be called **Installed apps** or **Apps & features**.
3. Choose **Uninstall** and follow the prompts.

Uninstall leaves `%LOCALAPPDATA%\Kala` in place so a reinstall can recover your preferences and personal choices. If you want to remove that data too, first export anything you want to keep, then delete that specific folder after uninstalling. Copies you exported elsewhere remain separate.
