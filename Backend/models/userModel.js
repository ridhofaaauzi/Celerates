import connection from "../config/database.js";

export const getAllUsers = (callback) => {
  connection.query("SELECT * FROM users", (error, results) => {
    if (error) {
      return callback(error, null);
    }
    callback(null, results);
  });
};
