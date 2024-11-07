const fs = require('fs');

const myWriteStream = fs.createWriteStream('./txtFile.txt', {
  flags: 'a',
});

myWriteStream.write('\n NEWEST DATA \n');
