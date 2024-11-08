const express = require('express');
const app = express();
const morgan = require('morgan');
const qs = require('querystring');

app.use(morgan('tiny'));

app.use(express.json());

//  or

// app.use((req, res, next) => {
//   let jsonData = '';

//   req.on('data', (chunk) => {
//     jsonData += chunk;
//   });
//   req.on('end', () => {
//     let data = JSON.parse(jsonData);
//     console.log(data);
//     req.body = data;
//     next();
//   });
// });

app.use(express.urlencoded({ extended: true }));

//  or

// app.use((req, res, next) => {
//   if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//     let data = '';
//     req.on('data', (chunk) => {
//       data += chunk.toString();
//     });
//     req.on('end', () => {
//       const parsedFormData = qs.parse(data);
//       console.log(parsedFormData);
//       console.log(data);
//     });
//   }
//   next();
// });

app.post('/', (req, res) => {
  console.log(req.body);

  res.end('Hello express');
});

app.listen(5000, () => {
  console.log('server is running on port 5000...');
});
