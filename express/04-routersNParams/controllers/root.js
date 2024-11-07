const getRootHandler = (req, res) => {
  console.log(req);

  res.send('getRootHandler');
};
module.exports = getRootHandler;
