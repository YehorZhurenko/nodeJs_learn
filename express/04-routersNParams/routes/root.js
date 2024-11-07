const app = require('express');
const rootHandler = require('../controllers/root');

const rootRouter = app.Router();

rootRouter.get('/', rootHandler);

module.exports = rootRouter;
