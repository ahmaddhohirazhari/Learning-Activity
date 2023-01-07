const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authModel = require("../models/auth");
const wrapper = require("../utils/wrapper");

module.exports = {
  login: async (request, response) => {
    try {
      const { email, password } = request.body;

      const checkEmail = await authModel.getUserByEmail(email);

      if (checkEmail.rows.length < 1) {
        return wrapper.response(response, 403, "Email is not registered");
      }
      //   if (checkEmail.rows[0].status == null) {
      //     return wrapper.response(response, 200, `Please verivied your email`);
      //   }
      const isValid = await bcrypt
        .compare(password, checkEmail.rows[0].password)
        .then((result) => result);

      if (!isValid) {
        return wrapper.response(response, 400, "Wrong Password");
      }
      const payload = {
        userId: checkEmail.rows[0].userId,
        role: checkEmail.rows[0].role,
      };

      const token = jwt.sign(payload, "RAHASIA", {
        expiresIn: "24h",
      });

      const refreshToken = jwt.sign(payload, "RAHASIA", {
        expiresIn: "36h",
      });

      const newResult = {
        userId: checkEmail.rows[0].userId,
        token,
        refreshToken,
      };
      return wrapper.response(response, 200, "Success Login", newResult);
    } catch (error) {
      console.log(error);
      const {
        status = 500,
        statusText = "Internal Server Error",
        error: errorInput = null,
      } = error;
      return wrapper.response(response, status, statusText, errorInput);
    }
  },
};
