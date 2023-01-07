const express = require("express");

const Router = express.Router();

const greetingsRoutes = require("./greetings");
const authRoutes = require("./auth");
const activityRoutes = require("./activity");

Router.use("/auth", authRoutes);
Router.use("/greetings", greetingsRoutes);
Router.use("/activity", activityRoutes);

module.exports = Router;
