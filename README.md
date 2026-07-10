# CleanTone

A browser-based audio enhancement tool that cleans up instrument and voice recordings. No uploads, no accounts — everything runs locally in your browser.

## What it does

- Removes background hiss and room noise
- Cuts low-frequency rumble from handling and AC hum
- Boosts clarity and presence so recordings sound crisp
- Normalizes volume to a consistent level
- Never uploads your audio — processed entirely on your device

## How to use it

1. Drop an MP3 or WAV file onto the upload area
2. Pick a preset for your instrument (or adjust the sliders yourself)
3. Hit Enhance, listen to both versions, then download the cleaned WAV

## Run it locally

```bash
Then open http://localhost:3001 in your browser.

Built with
Web Audio API (noise reduction, EQ, compression — all in the browser)
Vanilla JavaScript
Node.js + Express (just serves the page)
Why I built it
I wanted a way to clean up my recordings without paying for software or uploading my audio to some random website. Everything runs in the browser so your files stay private.
