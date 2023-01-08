const express = require("express");

const Router = express.Router();
const activityController = require("../controllers/activity");
const authMiddleware = require("../middleware/auth");

Router.post(
  "/",
  authMiddleware.authentication,
  activityController.createActivity
);
Router.get(
  "/:userId",
  authMiddleware.authentication,
  activityController.getActivity
);
Router.patch(
  "/:activityId",
  authMiddleware.authentication,
  activityController.update
);
Router.delete("/:id", authMiddleware.authentication, activityController.delete);
module.exports = Router;
