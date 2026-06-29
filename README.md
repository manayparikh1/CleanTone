# CleanTone

CleanTone is a web app I built to clean up and enhance instrument recordings such as flute, violin, voice, and guitar. You drop in an audio file, it removes background noise, brightens the sound, and balances the volume, and then it lets you compare the original against the enhanced version and download the result.

It is not trying to be a professional recording studio. The goal is simple: take an ordinary recording and make it noticeably cleaner, clearer, and louder.

## What does it basically do?

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

The audio cleanup process is carried out using the Web Audio API of the browser and some custom-made signal processing units:

- high pass filter and EQs for rumbler suppression, clarity, and warmth
- spectral noise reduction using FFT (short-time Fourier transform and spectral subtraction), which estimates noise from the quietest moments of the recording and then suppresses it across all frames
- noise gate for pauses, light compression for punch, and finally loudness/limiting

On average, this results in increasing the signal-to-noise ratio by 15 to 20 decibels, making quiet recordings louder by about 10 decibels, while leaving the instrument at the maximum volume level.
## To run it you gotta input:

```bash
npm install
npm start
```

Then open http://localhost:3001 and drop in a file. You do not strictly need the server; you can also open public/index.html directly in a browser. The server only exists to serve the page.

## How I built it

I came up with the idea and design from top-to-bottom: the concept, the user interface, the control settings, presets, and how the effect is supposed to sound. The process was refined through extensive testing back-and-forth until I got the right balance of noise reduction and loudness. I employed the use of an AI assistant to aid me in coding using Web Audio and FFT and to speed up those parts of the project which were mostly boilerplate. But the design, decision making, and testing were my own. I did most of the work and used AI as an aid to make progress faster. In conclusion, AI greatly aided me in connection such as Claude, Github Copilot, and very little Chatgpt for ideas.

## Tech

- Plain HTML, CSS, and JavaScript, no framework
- Web Audio API and a custom FFT for the audio processing
- A small Express server to serve the page
