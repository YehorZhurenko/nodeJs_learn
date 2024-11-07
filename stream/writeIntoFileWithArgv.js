const fs = require('fs');
const path = require('path');

const fileName = process.argv[2];
const lineQte = process.argv[3];

const myWriteStream = fs.createWriteStream('./' + fileName + '.txt');

myWriteStream.write('hello');

for (let i = 1; i <= lineQte; i++) {
  myWriteStream.write(`line number ${i}\n`);
}

myWriteStream.end(() => {
  console.log(`file ${fileName}.txt was successfully created with ${lineQte} lines if text`);
});

console.log(process.argv);
