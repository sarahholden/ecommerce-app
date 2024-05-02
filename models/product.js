const db = require("../db");

const pgp = require("pg-promise")({ capSQL: true });

module.exports = class ProductModel {
  /**
   * Creates a new product record
   * @param  {Object}      data [Product data]
   * @return {Object|null}      [Created product record]
   */
  async create(data) {
    try {
      const statement =
        pgp.helpers.insert(data, null, "products") + "RETURNING *";

      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Updates a user record
   * @param  {Object}      data [User data]
   * @return {Object|null}      [Updated user record]
   */
  async update(data) {
    try {
      const { id, ...params } = data;

      const condition = pgp.as.format("WHERE id = ${id} RETURNING *", { id });
      const statement =
        pgp.helpers.update(params, null, "products") + condition;

      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * List products
   * @param  {Object} options [Query options]
   * @return {Array}          [Array of products]
   */
  async find(options = {}) {
    try {
      const statement = `SELECT * FROM products`;
      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return [];
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Retrieve product by ID
   * @param  {Object}      id [Product ID]
   * @return {Object|null}    [Product record]
   */

  async findOneById(id) {
    try {
      const statement = `SELECT * FROM products WHERE id = $1`;
      const values = [id];
      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteById(id) {
    try {
      const statement = `DELETE FROM products WHERE id = $1 RETURNING *`;
      const values = [id];
      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows[0];
      }

      return null;
    } catch (err) {
      throw new Error(err);
    }
  }
};
