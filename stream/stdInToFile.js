//  const stream = require('stream');
const fs = require('fs');

const myWriteStream = fs.createWriteStream('./dumpFile.txt');

process.stdin.pipe(myWriteStream);
