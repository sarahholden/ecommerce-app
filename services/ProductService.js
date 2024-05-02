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

  async get(id) {
    try {
      const product = await ProductModelInstance.findOneById(id);
      return product;
    } catch (err) {
      throw createError(500, err);
    }
  }

  async remove(id) {
    try {
      const product = await ProductModelInstance.findOneById(id);
      if (!product) {
        throw createError(404, "Not Found");
      }
      const response = await ProductModelInstance.deleteById(id);
      return response;
    } catch (err) {
      throw createError(500, err);
    }
  }
};
