const http = require('http');
const people = require('./data');
const { getPlainText, getHtml, getJson, postJson, getHome } = require('./utilFuncs');

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res);
  } else if (req.method === 'GET' && req.url === '/plain_text') {
    return getPlainText(req, res);
  } else if (req.method === 'GET' && req.url === '/html') {
    return getHtml(req, res);
  } else if (req.method === 'GET' && req.url === '/json_people') {
    return getJson(req, res);
  } else if (req.method === 'POST' && req.url === '/json_people') {
    return postJson(req, res);
  }

  res.statusCode = 404;
  res.setHeader('Cotent-Type', 'text/html');
  res.end('<h1>404 page not found</h1>');
});

server.listen(PORT);
