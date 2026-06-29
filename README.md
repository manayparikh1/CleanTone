# CleanTone

CleanTone is a web app I built to clean up and enhance instrument recordings such as flute, violin, voice, and guitar. You drop in an audio file, it removes background noise, brightens the sound, and balances the volume, and then it lets you compare the original against the enhanced version and download the result.

It is not trying to be a professional recording studio. The goal is simple: take an ordinary recording and make it noticeably cleaner, clearer, and louder.

## What it does

- Upload an MP3 or WAV file (up to 50 MB).
- Enhance it in one click. The processing chain:
  - learns the noise fingerprint of the recording and subtracts it, so steady hiss and hum are removed across the whole track, not just in the quiet moments
  - cuts low-frequency rumble and handling thumps
  - gates the gaps between notes so they sit in silence instead of noise
  - boosts clarity and air in the mid and high range so the instrument sits up front
  - evens out the dynamics and raises the overall level so the result is full and loud without clipping
- Compare the original and the enhanced version side by side, with real waveforms drawn from the actual audio.
- Download the enhanced version as a WAV.

You can also adjust noise reduction, rumble cut, clarity, and warmth by hand, or pick a preset: Balanced, Voice, Strings, Wind, or Max clean.

Everything runs locally in the browser. Your audio is never uploaded to a server.

## How it works under the hood

The cleanup is done with the browser's Web Audio API and some custom signal processing:

- a high-pass filter and EQ stages for rumble removal, clarity, and warmth
- an FFT-based spectral noise reduction stage (short-time Fourier transform with spectral subtraction) that estimates the noise from the quietest parts of the recording and removes it from every frame
- a noise gate for the gaps, a light compressor for punch, and a final loudness and limiting stage

In testing, this typically improves the signal-to-noise ratio by 15 to 20 dB, and brings quiet recordings up by around 10 dB, while keeping the instrument itself at full level.

## Running it

```bash
npm install
npm start
```

Then open http://localhost:3001 and drop in a file. You do not strictly need the server; you can also open public/index.html directly in a browser. The server only exists to serve the page.

## How I built it

I designed the whole thing: the concept, the interface, the controls, the presets, and the way the enhancement should sound. I tuned the processing chain through a lot of back-and-forth testing to get the noise reduction and loudness where I wanted them. I used an AI assistant to help write and debug the Web Audio and FFT code and to speed up the parts that were mostly boilerplate, but the direction, the decisions, and the testing were mine. I did the majority of the work and used the AI as a tool to move faster.

## Tech

- Plain HTML, CSS, and JavaScript, no framework
- Web Audio API and a custom FFT for the audio processing
- A small Express server to serve the page
