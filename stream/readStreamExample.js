const stream = require('fs');

const myReadStream = stream.createReadStream('./txtFile.txt', 'utf8');

myReadStream.on('data', (chunk) => {
  console.log(chunk);
  console.log(
    '\n-------------------------------------------------------------------------------------------\n',
  );
});

myReadStream.emit('data');
