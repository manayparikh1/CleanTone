CleanTone
CleanTone is a lightweight, browser-based audio editing application designed specifically for musicians and podcasters who create their sound files at home and want to make sure that it sounds more refined. It is an entirely offline application which works directly in your browser, analyzing your file and processing it without any account registration, upload, or cloud processing.

What it does
The application works to solve the issues associated with day-to-day recordings and eliminates the distractions, so you can focus solely on the performance itself. This includes eliminating background noise which makes the silent moments of your performance sound better. It removes the low-frequency rumble that may be created by handling noise, air conditioners and other sources of mechanical sounds that can ruin the performance. CleanTone enhances clarity and presence of the instruments in order to make them sound better and normalizes the volume of your recording.

How to use it
The way you interact with CleanTone is made as easy as possible. You drag and drop the MP3 or WAV file into the upload area. After the upload is done, you either pick one of the presets designed specifically for your type of audio or adjust sliders yourself. Then click Enhance button, and the CleanTone will process the audio and give you the cleaned copy which you may play back-to-back with the original recording. If everything is good, you just download enhanced WAV audio from CleanTone.

Run it locally
CleanTone runs entirely locally and does not require any setup besides installation of the project dependencies. Just start the local server and open the page in your browser:

Code
npm install
npm start
And then open http://localhost:3001 in your browser. All server has to do is serving the page. All audio processing is done by browser.

Built with
All audio processing including noise reduction, equalization and compression and whatever else happens in CleanTone is made using Web Audio API. The interface is implemented using plain JavaScript without any frameworks and there is a tiny Node.js + Express server used solely to serve static content.

Why did I create this
I was looking for a method to edit my own audios without spending on paid software or uploading any personal audio into an unknown website. Almost all websites need you to send your audios to their servers, and almost all desktop apps are behind paywalls. CleanTone solves both the problems because it works completely in your browser. Your audio is safe and you will definitely receive the improved version of your audio. Specially me I play flute which sounds like trash when I play it in my own room but now as it is created I am able to modify it and it sounds amazing.