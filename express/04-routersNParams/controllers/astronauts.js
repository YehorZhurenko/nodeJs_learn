const getAstronautsHandler = (req, res) => {
  console.log('getAstronautsHandler');
  res.end('postAstronautHandler');
};

const postAstronautHandler = (req, res) => {
  console.log('postAstronautHandler');
  res.end('postAstronautHandler');
};

const getAstronautHandler = (req, res) => {
  console.log('getAstronautHandler');
  res.end(`astronaut #${req.params.id}`);
};

const deleteAstronautHandler = (req, res) => {
  console.log('deleteAstronautHandler');
  res.end(`astronaut #${req.params.id} is deleted`);
};

const updateAstronautHandler = (req, res) => {
  res.end(`astronaut #${req.params.id} updated`);
};

module.exports = {
  getAstronautsHandler,
  postAstronautHandler,
  getAstronautHandler,
  deleteAstronautHandler,
  updateAstronautHandler,
};
