const fs = require('node:fs');
const path = require('node:path');

// Specify the file path
const filePath = path.join(__dirname, 'text.txt');

// Create a ReadStream from the file
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

// Direct the read stream to the standard output stream (console)
readStream.pipe(process.stdout);

// Handle errors during the reading process
readStream.on('error', (err) => {
  console.error(`Error reading the file: ${err.message}`);
});