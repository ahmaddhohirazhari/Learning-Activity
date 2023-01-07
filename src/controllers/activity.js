const { request } = require("express");
const activityModel = require("../models/activity");
const wrapper = require("../utils/wrapper");

module.exports = {
  createActivity: async (request, response) => {
    try {
      const { userId, monthId, methodId, name, dateTime } = request.body;
      const data = {
        userId,
        monthId,
        methodId,
        name,
        dateTime,
      };
      const result = await activityModel.createActivity(data);
      return wrapper.response(
        response,
        201,
        "success create data",
        result.rows
      );
    } catch (error) {
      console.log(error);
      return wrapper.response(response, 500, "Internal Server Error", null);
    }
  },
  getActivity: async (request, response) => {
    try {
      const { userId } = request.params;
      console.log(userId);
      const result = await activityModel.getActivityByUserId(userId);
      return wrapper.response(response, 200, "Success Get Data", result.rows);
    } catch (error) {
      console.log(error);
      return wrapper.response(response, 500, "Internal Server Error", null);
    }
  },
};
