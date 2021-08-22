const express = require('express');

const CalcController = require('./controllers/CalcController');

const routes = express.Router();

routes.get('/calcs', CalcController.indexall)
routes.get('/calcs/:user', CalcController.indexforname)
routes.post('/calcs', CalcController.store);

module.exports = routes;