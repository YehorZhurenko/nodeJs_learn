const app = require('express');

const astronautRouter = require('../routes/astronauts');
const planetRouter = require('../routes/planets');
const rootRouter = require('../routes/root');

const router = app.Router();

router.use('/astronauts', astronautRouter);
router.use('/planets', planetRouter);
router.use('/', rootRouter);

module.exports = router;
