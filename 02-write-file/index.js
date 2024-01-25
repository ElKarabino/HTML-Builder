const fs = require('node:fs');
const readline = require('readline');
const path = require('node:path');

const filePath = path.join(__dirname, '02-write-file.txt');
const startText = 'Write some text: ';
const writeStream = fs.createWriteStream(filePath, { flags: 'a', encoding: 'utf-8' });
const rl = readline.createInterface(process.stdin, process.stdout);
function input() {
  rl.question(startText, (text) => {
    if (text === 'exit') {
      console.log('GoodBye!');
      rl.close();
    }
    else {
      writeStream.write(text + '\n');
      input();
    }
  });
  rl.on('SIGINT', () => {
    console.log('\nGoodbye!');
    rl.close();
  });
};
input();