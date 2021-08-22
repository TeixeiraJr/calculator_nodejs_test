const express = require('express');

const CalcController = require('./controllers/CalcController');
const { executeCalc } = require('./middlewares/middlewares')

const routes = express.Router();

routes.get('/calcs', CalcController.indexall)
routes.get('/calcs/:user', CalcController.indexforname)
routes.post('/calcs', executeCalc, CalcController.store);

module.exports = routes;