const express = require('express');

const CalcController = require('./controllers/CalcController');
const { isUsername, verifyUsername , isValidAccount} = require('./middlewares/middlewares')

const routes = express.Router();

routes.use(express.json());
routes.get('/calcs', CalcController.indexall);
routes.get('/calcs/:user', isUsername, CalcController.indexforname);
routes.post('/calcs', isValidAccount, verifyUsername, CalcController.store);

module.exports = routes;