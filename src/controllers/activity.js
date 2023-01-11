const { request } = require("express");
const activityModel = require("../models/activity");
const { response } = require("../utils/wrapper");
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
      const { monthId } = request.body;
      const month = await activityModel.getMonth(monthId);
      console.log(userId);
      const result = await activityModel.getActivityByUserId(userId);
      if (result.rows.length < 0) {
        return wrapper.response(response, 404, "Data not Found", []);
      }

      const newResult = { ...month.rows[0], data: result.rows };
      return wrapper.response(response, 200, "Success Get Data", newResult);
    } catch (error) {
      console.log(error);
      return wrapper.response(response, 500, "Internal Server Error", null);
    }
  },
  update: async (request, response) => {
    try {
      const { activityId } = request.params;

      const { name, dateTime } = request.body;
      const checkData = await activityModel.getActivityById(activityId);

      if (checkData.rows.length < 0) {
        return wrapper.response(response, 404, "Data not Found", []);
      }

      const data = {
        name,
        dateTime,
        updateAt: "now()",
      };
      const result = await activityModel.update(activityId, data);

      return wrapper.response(
        response,
        201,
        "Success Update Data",
        result.rows
      );
    } catch (error) {
      console.log(error);
      return wrapper.response(response, 500, "Internal Server Error", []);
    }
  },
  delete: async (request, response) => {
    try {
      const { id } = request.params;
      const checkData = await activityModel.getActivityById(id);
      console.log(id);
      if (checkData.rows.length < 0) {
        return wrapper.response(response, 404, "Data Not Found", []);
      }
      console.log(checkData.rows);
      console.log("test");
      const result = await activityModel.delete(id);
      return wrapper.response(response, 201, "Success Delet !", result.rows);
    } catch (error) {
      console.log(error);
      return wrapper.response(response, 500, "Internal Server Error", []);
    }
  },
};
