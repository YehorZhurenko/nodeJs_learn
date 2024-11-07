const express = require('express');

const {
  getPlanetHandler,
  getPlanetsHandler,
  deletePlanetHandler,
  updatePlanetHandler,
  postPlanetHandler,
} = require('../controllers/planets');

const planetsRouter = express.Router();

planetsRouter.get('/', getPlanetsHandler);
planetsRouter.get('/:id', getPlanetHandler);
planetsRouter.delete('/:id', deletePlanetHandler);
planetsRouter.put('/:id', updatePlanetHandler);
planetsRouter.post('/', postPlanetHandler);

module.exports = planetsRouter;
