# Kala User Guide

Kala helps you type Bangla in Windows apps. It runs in the background and is available from its icon near the clock.

## Download and install

1. Open the [Kala releases page](https://github.com/robispider/kala-releases/releases).
2. Open the release you want and download its setup `.exe` from the **Assets** list. The current file is `KalaSetup-v0.1.0-alpha.1.exe`; **v0.1.0-alpha.1** is a pre-release.
3. Run the downloaded file. The installer is unsigned, so Windows may show a SmartScreen warning. Only use a setup file downloaded from the official Kala releases page.
4. Follow the wizard. The default install location is `%LOCALAPPDATA%\Programs\Kala`. A Start Menu shortcut is created; creating a desktop shortcut is optional.
5. When setup finishes, choose **Open Kala** to start.

The setup is for 64-bit Windows, installs only for your Windows account, and does not need administrator permission or a separate .NET runtime. Close Kala before installing an update. Your settings and personal words are kept when you update.

## First time using Kala

When Kala opens for the first time, follow its welcome steps and choose a layout:

- **Avro Phonetic** — type Bangla using familiar Roman spellings.
- **UniJoy** — type using the UniJoy key arrangement.

Try the layout in Kala's practice field, then choose **Start using Kala**. The default shortcut is **Ctrl + Alt + V**. You can choose **Ctrl + Alt + B** instead in Settings.

## Type in another app

1. Open the app where you want to write and click the text field.
2. Press **Ctrl + Alt + V** (or your selected shortcut) to turn Bangla typing on in that app.
3. Type with your selected layout. Press the shortcut again to turn Bangla off for that app.

Kala remembers each app's Bangla on/off choice while it is running. After restarting Kala, Bangla starts off in each app. Your layout, shortcut, and correction settings remain saved.

With Avro Phonetic, for example, typing `bangla` produces Bangla text. With UniJoy or another fixed layout, the output follows that layout's key map. You can change the active layout from Kala's window or tray menu.

## Tray menu and pausing

Right-click Kala's tray icon to see its status and open the main window, settings, personal words, or on-screen keyboard. The icon indicates whether Bangla is on for the current app or Kala is paused.

Choose **Pause Kala** when you want ordinary keyboard input in every app without Kala processing keys. Choose **Resume Kala** to continue. Closing Kala's main window leaves Kala running in the tray. Choose **Exit Kala** from the tray menu to stop it completely.

## On-screen keyboard

Open **On-screen keyboard** from the Kala window or tray menu. Click the destination text field first, then use the on-screen keys. The keyboard follows the selected layout and shares its typing and correction settings with the physical keyboard. Shift and Caps change key mappings; the window can be moved by dragging its title bar.

## Corrections and personal words

Automatic corrections are controlled in **Settings**. When enabled, Kala can correct supported single-word mistakes when you press Space. You can turn automatic corrections off while continuing to use Kala for Bangla input. Suggestions and other optional help can also be changed in Settings.

Use **Personal words** to save words or shortcuts that should be handled according to your preferences. Personal words and settings are stored under `%LOCALAPPDATA%\Kala` and are kept when Kala is updated or uninstalled.

## Layouts

Choose a supplied layout in Kala's Settings or tray menu. To add a layout, open **Layouts → Import layout…**, select a supported Kala `.json` or Avro `.avrolayout` file, review it, and import it. The imported layout is saved on your computer and does not change the original file. Kala's importer supports specified modern Unicode layouts; it does not support Avro 4 format, Bijoy/ANSI output, or layouts that require a separate trained model.

## Settings

Open **Settings** to change the layout, mode shortcut, correction options, interface language, light/dark theme, on-screen keyboard size, and whether Kala starts when you sign in to Windows. Changes are saved for your Windows account.

## Troubleshooting

**Bangla does not appear in an app**

- Click inside an editable text field before using the shortcut.
- Check that Kala is not paused and that Bangla is on for that app.
- Confirm the selected layout in Kala's window or tray menu.
- Try another ordinary text field. Password, read-only, disabled, or protected fields may not accept Kala's input.

**Kala says “Typing needs attention”**

Check the text at the insertion point because an edit may have been incomplete. Fix the text if needed, then toggle Bangla off and on or pause and resume Kala to clear the notice. Kala does not automatically replay an uncertain edit.

**Windows shows a security warning**

The current installer is unsigned. Check that you downloaded the Kala setup `.exe` from the official [Kala releases page](https://github.com/robispider/kala-releases/releases). Do not run a file from an unknown source.

As an alpha release, Kala may have issues in some apps. When reporting a problem on the [Issues page](https://github.com/robispider/kala-releases/issues), include the Kala version, Windows version, app name, what you expected, and what happened. Leave out passwords and private text.

## Update or uninstall

To update, download the setup `.exe` from a newer release, close Kala, and run setup. The installer updates the current per-user installation and keeps your settings and personal words.

To uninstall, use **Settings → Apps → Installed apps** in Windows and uninstall Kala. Your settings and personal words remain under `%LOCALAPPDATA%\Kala`. To remove them too, delete that folder after uninstalling, if you no longer need the data.

## Free to use

Kala is free to use and share. Its source code is planned to be made available in the future. The source code is not included in this releases repository at this time.
