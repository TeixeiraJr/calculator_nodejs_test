const sequelize = require('sequelize');
const dbConfig = require('./config');

const connection = new sequelize(dbConfig);

module.exports = connection;