const express = require("express");
const router = express.Router();

// Instantiate Services
const CartService = require("../services/CartService");
const CartServiceInstance = new CartService();

module.exports = (app) => {
  app.use("/carts", router);

  // Get /mine cart (load)

  // PUT /mine

  // POST /mine (create cart)

  // POST /mine/items (add item to cart)

  // PUT /mine/items/:cartItemId (update item in cart)

  // DELETE /mine/items/:cartItemId

  // POST /mine/checkout
};
