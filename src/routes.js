const express = require('express');

const CalcController = require('./controllers/CalcController');
const { isUsername, verifyUsername } = require('./middlewares/middlewares')

const routes = express.Router();

routes.use(express.json());
routes.get('/calcs', CalcController.indexall);
routes.get('/calcs/:user', isUsername, CalcController.indexforname);
routes.post('/calcs', verifyUsername, CalcController.store);

module.exports = routes;