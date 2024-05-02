const db = require("../db");

const pgp = require("pg-promise")({ capSQL: true });

module.exports = class UserModel {
  /**
   * Creates a new user record
   * @param  {Object}      data [User data]
   * @return {Object|null}      [Created user record]
   */
  async create(data) {
    try {
      // Use pgp helper to dynamically inject params into SQL statement
      const statement = pgp.helpers.insert(data, null, "users") + "RETURNING *";

      // Execute
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
};
