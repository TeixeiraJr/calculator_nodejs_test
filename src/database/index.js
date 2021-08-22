const sequelize = require('sequelize');
const dbConfig = require('./config');

const Calculator = require('./models/Calculator')

const connection = new sequelize(dbConfig);

Calculator.init(connection);

module.exports = connection;