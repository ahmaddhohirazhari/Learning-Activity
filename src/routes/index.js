const express = require("express");

const Router = express.Router();

const greetingsRoutes = require("./greetings");

Router.use("/greetings", greetingsRoutes);

module.exports = Router;
