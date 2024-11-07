const express = require('express');

const {
  getAstronautsHandler,
  postAstronautHandler,
  getAstronautHandler,
  deleteAstronautHandler,
  updateAstronautHandler,
} = require('../controllers/astronauts');

const astronautsRouter = express.Router();

astronautsRouter.get('/', getAstronautsHandler);
astronautsRouter.get('/:id', getAstronautHandler);
astronautsRouter.post('/:id', postAstronautHandler);
astronautsRouter.delete('/:id', deleteAstronautHandler);
astronautsRouter.put('/:id', updateAstronautHandler);

module.exports = astronautsRouter;
