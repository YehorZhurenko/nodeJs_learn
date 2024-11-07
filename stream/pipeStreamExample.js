const fs = require('fs');

const myReadStream = fs.createReadStream('./from.txt', 'utf8');
const myWriteStream = fs.createWriteStream('./to.txt');

myReadStream.pipe(myWriteStream);

myWriteStream.on('close', () => {
  console.log('done');
});
