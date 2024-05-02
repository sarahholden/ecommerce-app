const createError = require("http-errors");
const CartModel = require("../models/cart");
const CartModelInstance = new CartModel();

module.exports = class CartService {};
