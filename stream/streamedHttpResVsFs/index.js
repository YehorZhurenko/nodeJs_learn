const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      const myReadStream = fs.createReadStream('./index.html');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      myReadStream.pipe(res);
    }
  })
  .listen(5000, () => {
    console.log('server is up n running');
  });
