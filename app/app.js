const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.set('sequelize', sequelize);

app.get('/', (req, res) => { res.send('This is Express API') });
app.use(routes);

module.exports = app;
