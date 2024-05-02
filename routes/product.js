const express = require("express");
const router = express.Router();

const ProductService = require("../services/ProductService");
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use("/products", router);

  // GET all products

  // POST create a new product
  router.post("/", async (req, res, next) => {
    try {
      const data = req.body;
      const response = await ProductServiceInstance.create(data);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // DELETE a product (by id)

  // UPDATE a product (by id)

  // get a product by product id
};
