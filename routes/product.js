const express = require("express");
const router = express.Router();

const ProductService = require("../services/ProductService");
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use("/products", router);

  // GET all products
  router.get("/", async (req, res, next) => {
    try {
      const queryParams = req.query;

      const response = await ProductServiceInstance.list(queryParams);
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

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
  router.get("/:productId", async (req, res, next) => {
    try {
      const { productId } = req.params;
      const response = await ProductServiceInstance.get(productId);
      if (!response) {
        res.status(404).send("Product not found!");
      }
      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });
};
