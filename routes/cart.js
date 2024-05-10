const express = require("express");
const router = express.Router();

// Instantiate Services
const CartService = require("../services/CartService");
const CartServiceInstance = new CartService();

module.exports = (app) => {
  app.use("/carts", router);

  // Get /mine cart (load)
  router.get("/mine", async (req, res, next) => {
    try {
      const { id } = req.user;
    } catch (err) {
      next(err);
    }
  });

  // PUT /mine
  router.put("/mine", async (req, res, next) => {
    try {
      const { id } = req.user;
    } catch (err) {
      next(err);
    }
  });

  // POST /mine (create cart)
  router.post("/mine", async (req, res, next) => {
    try {
      const { id } = req.user;

      const response = await CartServiceInstance.create({ userId: id });

      res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  });

  // POST /mine/items (add item to cart)
  router.post("/mine/items", async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });

  // PUT /mine/items/:cartItemId (update item in cart)
  router.put("/mine/items/:cartItemId", async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });

  // DELETE /mine/items/:cartItemId
  router.delete("/mine/items/:cartItemId", async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });

  // POST /mine/checkout
  router.post("/mine/checkout", async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });
};
