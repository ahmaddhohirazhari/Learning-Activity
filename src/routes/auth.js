const express = require("express");

const Router = express.Router();

const authController = require("../controllers/auth");

Router.post("/login", authController.login);

module.exports = Router;
