const createError = require("http-errors");
const ProductModel = require("../models/product");
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {
  async create(data) {
    try {
      // Check if product already exists
      // If product exists, reject

      // Product doesn't exist, create record
      return await ProductModelInstance.create(data);
    } catch (err) {
      throw createError(500, err);
    }
  }

  async list(options) {
    try {
      const products = await ProductModelInstance.find(options);
      return products;
    } catch (err) {
      throw createError(500, err);
    }
  }
};
