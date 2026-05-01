# Brody

Brody — offline desktop speech-to-text app. Default language: Uzbek (`uz`).

Based on open-source local STT stack. Audio stays on your computer.

## Features

- Offline speech-to-text
- Uzbek selected by default
- Whisper, Parakeet, Canary, Moonshine and other local models
- Custom Whisper GGML `.bin` model import
- Global shortcut recording
- Clipboard paste into active app
- macOS, Windows, Linux support

## Custom model

1. Open **Settings → Models**.
2. Click **Import Custom Model**.
3. Select Whisper GGML `.bin` file.
4. Select imported model and start transcription.

Manual option: put `.bin` file into app data `models` folder, then restart Brody.

## Development

Requirements:

- Rust stable
- Bun
- CMake

Install:

```bash
bun install
```

Run frontend:

```bash
bun run dev
```

Run desktop app:

```bash
bun run tauri dev
```

Build frontend:

```bash
bun run build
```

Build app:

```bash
bun run tauri build
```

## Dev model setup

VAD model needed for local development:

```bash
mkdir -p src-tauri/resources/models
curl -o src-tauri/resources/models/silero_vad_v4.onnx "$VAD_MODEL_URL"
```

## CLI

```bash
brody --toggle-transcription
brody --toggle-post-process
brody --cancel
brody --start-hidden
brody --no-tray
brody --debug
```

macOS app bundle:

```bash
/Applications/Brody.app/Contents/MacOS/Brody --toggle-transcription
```

## App data

Typical paths:

- macOS: `~/Library/Application Support/uz.brodev.brody/`
- Windows: `%APPDATA%/uz.brodev.brody/`
- Linux: `~/.config/uz.brodev.brody/`

## License

MIT
