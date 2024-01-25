const fs = require('node:fs');
const path = require('node:path');

const folderPath = path.join(__dirname, '/secret-folder');

fs.readdir(folderPath, (err, files) => {
  if(err) {
    console.log('Error');
  } else {
    const onlyFiles = files.filter((file) => {
      return fs.statSync(path.join(folderPath, file)).isFile();
    });
    onlyFiles.forEach(file => {
      const filePath = path.join(folderPath,  file);
      fs.stat(filePath,  (err, stats) => {
        if(err) {
          console.log('Err');
        } else {
          console.log(path.basename(file, path.extname(file)) + ' - ' + path.extname(file).slice(1) + ' - ' + stats.size / 1024. + "kb");
        }
      });
    });
  }
});