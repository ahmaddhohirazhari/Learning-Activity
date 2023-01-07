const wrapper = require("../utils/wrapper");

module.exports = {
  greetings: async (request, response) => {
    try {
      return wrapper.response(response, 200, "Succes Get Data!", []);
    } catch (error) {
      const {
        status = 500,
        statusText = "Internal Server Error",
        error: errorData = null,
      } = error;
      return wrapper.response(response, status, statusText, errorData);
    }
  },
};
