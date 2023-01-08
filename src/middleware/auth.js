const jwt = require("jsonwebtoken");
const wrapper = require("../utils/wrapper");

module.exports = {
  authentication: async (request, response, next) => {
    try {
      const token = request.headers.authorization;
      if (!token) {
        return wrapper.response(response, 403, "Please Login First", null);
      }

      jwt.verify(token.split(" ")[1], "RAHASIA", (error, result) => {
        if (error) {
          return wrapper.response(response, 403, error.message, null);
        }

        request.decodeToken = result;
        return next();
      });
    } catch (error) {
      return error.error;
    }
  },
};
