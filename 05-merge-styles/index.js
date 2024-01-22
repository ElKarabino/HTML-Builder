const fs = require('node:fs').promises;
const path = require('node:path');

const stylesPath = path.join(__dirname, 'styles');
const outputPath = path.join(__dirname, 'project-dist');
const outputStyle = path.join(outputPath, 'bundle.css');

async function mergeStyles() {
  try {
    const files = await fs.readdir(stylesPath);
    const filePromises = files.map(async (file) => {
      const filePath = path.join(stylesPath, file);
      const content = await fs.readFile(filePath);
      return content;
    });
    const fileContents = await Promise.all(filePromises);
    const compiledStyles = fileContents.join('\n');
    await fs.writeFile(outputStyle, compiledStyles);
  }
  catch (err) {
    console.log('Error');
  }
}
mergeStyles();