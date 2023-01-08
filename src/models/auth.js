const db = require("../config/database");
module.exports = {
  getUserByEmail: (email) =>
    new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email=$1",
        [email],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
  register: (data) =>
    new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
        [data.email, data.password],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
};
