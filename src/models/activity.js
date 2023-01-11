const db = require("../config/database");
const activity = require("../controllers/activity");

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
  getMonth: (id) =>
    new Promise((resolve, reject) => {
      db.query(
        `SELECT name FROM month WHERE "monthId" =$1`,
        [id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
  getActivityById: (activityId) =>
    new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM activities WHERE "activityId"= $1`,
        [activityId],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
  update: (id, data) =>
    new Promise((resolve, reject) => {
      db.query(
        `UPDATE activities  SET name = $2, "dateTime" = $3, "updateAt" = $4 WHERE "activityId" =$1 RETURNING *`,
        [id, data.name, data.dateTime, data.updateAt],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    }),
  delete: (activityId) =>
    new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM activities WHERE "activityId" = $1`,
        [activityId],
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
