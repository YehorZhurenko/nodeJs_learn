const stream = require('stream');

const upperCaseTrStream = stream.Transform({
  transform(chunk, encoding, cb) {
    const result = chunk.toString().toUpperCase();

    cb(null, result);
  },
});

const reverseTrStream = stream.Transform({
  transform(chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split('');

    const char = arrayOfChars.pop();

    const result = arrayOfChars.reverse().concat(char).join('');

    cb(null, result);
  },
});

process.stdin.pipe(upperCaseTrStream).pipe(reverseTrStream).pipe(process.stdout);
