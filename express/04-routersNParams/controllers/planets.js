const getPlanetsHandler = (req, res) => {
  console.log('getPlanetsHandler');
};

const postPlanetHandler = () => {
  console.log('postPlanetHandler');
};

const getPlanetHandler = (req, res) => {
  res.end(`planet #${req.params.id}`);
};

const deletePlanetHandler = (req, res) => {
  res.end(`planet #${req.params.id} is deleted`);
};

const updatePlanetHandler = (req, res) => {
  res.end(`planet #${req.params.id} is updated`);
};

module.exports = {
  getPlanetHandler,
  getPlanetsHandler,
  deletePlanetHandler,
  updatePlanetHandler,
  postPlanetHandler,
};
