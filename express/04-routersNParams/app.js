const express = require('express');
const router = require('./routes');

const PORT = 5000;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
