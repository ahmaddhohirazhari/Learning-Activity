const db = require("../config/database");

module.exports = {
  createActivity: (data) =>
    new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO activities ("userId","monthId","methodId", "name","dateTime") VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [data.userId, data.monthId, data.methodId, data.name, data.dateTime],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
  getActivityByUserId: async (userId) =>
    new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM activities WHERE "userId"= $1`,
        [userId],
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
