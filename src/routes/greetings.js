const express = require("express");

const Router = express.Router();

const greetingsController = require("../controllers/greetings");

Router.get("/", greetingsController.greetings);

module.exports = Router;
