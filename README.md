# Brody

**O'zbek tili uchun offline ovozli yozuv (speech-to-text) ilovasi.** Press a shortcut, speak Uzbek, and your words appear in any text field — fully offline, on your own machine.

Brody is a desktop speech-to-text app focused on **Uzbek**. It ships with the [rubaiSTT v2 medium](https://huggingface.co/islomov/rubaistt_v2_medium) model selected by default — a Whisper Medium fine-tune for Uzbek (Latin script, ~17% WER). Other languages still work via the bundled Whisper / Parakeet models.

> Brody is an unofficial fork of [Handy](https://github.com/cjpais/Handy) with its own branding. It is not affiliated with or endorsed by the Handy project.

## How it works

1. **Press** a configurable shortcut to start/stop recording (or push-to-talk).
2. **Speak** while the shortcut is active.
3. **Release** — Brody transcribes locally (Whisper / Parakeet).
4. **Get** the text pasted straight into the focused app.

Everything is local: silence is trimmed with Silero VAD, then audio is transcribed on-device. No audio leaves your computer.

## Models

| Model | Language | Notes |
| --- | --- | --- |
| **rubaiSTT Medium (Uzbek)** ⭐ default | Uzbek | Whisper Medium fine-tune, Latin script, ~17% WER |
| Whisper Small / Medium / Turbo / Large | Multilingual | GPU-accelerated when available |
| Parakeet V3 | 25 EU languages | CPU-optimized, auto language detection |

The Uzbek model is recommended on first run and downloaded from the [brody release](https://github.com/ExcuseMeBro/brody/releases/tag/model-v2). You can switch models any time in **Settings → Models**.

## Build from source

Prerequisites: [Rust](https://rustup.rs/) (stable) and [Bun](https://bun.sh/).

```bash
bun install

# fetch the VAD model used at runtime
mkdir -p src-tauri/resources/models
curl -o src-tauri/resources/models/silero_vad_v4.onnx https://blob.handy.computer/silero_vad_v4.onnx

# run in dev
bun run tauri dev
# macOS cmake hiccup? prefix:
CMAKE_POLICY_VERSION_MINIMUM=3.5 bun run tauri dev

# production build
bun run tauri build
```

Detailed platform notes live in [BUILD.md](BUILD.md). On macOS, grant **microphone** and **accessibility** permissions on first run.

## CLI

Control a running instance from scripts or window-manager shortcuts:

```bash
brody --toggle-transcription   # toggle recording
brody --toggle-post-process    # toggle recording + AI post-processing
brody --cancel                 # cancel current operation
brody --start-hidden           # launch without the main window
brody --no-tray                # launch without the tray icon
brody --debug                  # verbose logging
```

macOS app bundle:

```bash
/Applications/Brody.app/Contents/MacOS/Brody --toggle-transcription
```

## App data directory

Models and settings live here:

- **macOS**: `~/Library/Application Support/com.brody.app/`
- **Windows**: `%APPDATA%\com.brody.app\`
- **Linux**: `~/.config/com.brody.app/`

### Custom / manual models

Drop a Whisper GGML `.bin` into `<app_data_dir>/models/` and restart — it auto-appears under **Custom Models** (name derived from the filename; don't rename `.bin` files of bundled models). The Uzbek ggml is also downloadable directly:

```
https://github.com/ExcuseMeBro/brody/releases/download/model-v2/ggml-rubaistt-v2-medium.bin
```

## Architecture

Tauri app: **React + TypeScript** frontend, **Rust** backend.

- `whisper-rs` — local Whisper inference (whisper.cpp / ggml)
- `transcribe-rs` — Parakeet inference
- `cpal` — audio I/O · `vad-rs` — VAD · `rdev` — global shortcuts · `rubato` — resampling

Debug menu: `Cmd+Shift+D` (macOS) / `Ctrl+Shift+D` (Win/Linux).

## License & attribution

MIT — see [LICENSE](LICENSE). Built on the open-source [Handy](https://github.com/cjpais/Handy) codebase.

## Acknowledgments

- **[rubaiSTT](https://huggingface.co/islomov/rubaistt_v2_medium)** (islomov) — Uzbek Whisper fine-tune
- **[Handy](https://github.com/cjpais/Handy)** — the upstream app this fork is based on
- **Whisper** (OpenAI), **whisper.cpp + ggml**, **Silero** VAD, **Tauri**
