const express = require("express");
const morgan = require("morgan");
const routes = require("./Routes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
// app.set('sequelize', sequelize);

app.get("/", (req, res) => { res.send("This is Express API") });
app.use(routes);

module.exports = app;
