const express = require("express");

const Router = express.Router();
const activityController = require("../controllers/activity");

Router.post("/", activityController.createActivity);
Router.get("/:userId", activityController.getActivity);
module.exports = Router;
