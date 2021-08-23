const express = require('express');
const routes = require('./routes');
const database = require('./database/index');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT ||

app.use(express.json());
app.use(routes);

app.listen(port);