/*
 * CleanTone — tiny static server.
 *
 * All the audio enhancement happens in the browser (see public/index.html),
 * so this server's only job is to serve the page. No uploads, no FFmpeg,
 * nothing that can silently fail.
 */
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const startedAt = new Date();

app.listen(port, () => {
  console.log(`🎵 CleanTone running at http://localhost:${port}`);
  console.log(`Started at ${startedAt.toLocaleTimeString()}`);
});
