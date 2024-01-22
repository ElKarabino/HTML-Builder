const fs = require('node:fs');
const path = require('node:path');
const folderPath = '04-copy-directory';

fs.mkdir(path.join(folderPath, 'files-copy'),
  { recursive: true },
  (err) => {
    if (err) {
      console.log('err');
    }
  });
fs.readdir(path.join(folderPath, 'files'), (err, files) => {
  if (err) {
    console.log('err');
  } else {
    files.forEach((file) => {
      const sourcePath = path.join(path.join(folderPath, 'files'),file);
      const destinationPath = path.join(path.join(folderPath, 'files-copy'),file);
      fs.copyFile(sourcePath, destinationPath, (err) => {
        if (err) {
          console.log('Error');
        } 
      });
    });
  }
});