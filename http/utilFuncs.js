const people = require('./data');
const fs = require('fs');
const qs = require('querystring');

function getPlainText(req, res) {
  res.statusCode = 200;
  res.setHeader('Cotent-Type', 'text/plain');
  res.write('Hello there plain text');
  return res.end();
}
function getHtml(req, res) {
  res.statusCode = 200;
  res.setHeader('Cotent-Type', 'text/html');
  res.write('<h1>Hello there html</h1>');
  return res.end();
}
function getJson(req, res) {
  res.statusCode = 200;
  res.setHeader('Cotent-Type', 'application/json');
  res.write(JSON.stringify(people));
  return res.end();
}
function postJson(req, res) {
  let peopleJson = '';

  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const person = qs.parse(body);
      console.log(person);
      people.push(person);
      req.statusCode = 200;
      res.end('done');
    });
  } else if (req.headers['content-type'] === 'application/json') {
    try {
      req.on('data', (chunk) => {
        peopleJson += chunk;
        people.push(JSON.parse(peopleJson));
      });

      req.on('end', () => {
        console.log(people);
        req.statusCode = 200;
        console.log('done');
      });
    } catch (error) {
      res.statusCode = 400;
      res.end('invalid json');
      console.log('invalid json');
    }
  } else {
    res.statusCode = 400;
    res.end('Invalid content type');
  }
}

function getHome(req, res) {
  fs.readFile('./files/index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('error while reading html file');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
}

module.exports = { getPlainText, getHtml, getJson, postJson, getHome };
