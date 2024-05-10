const createError = require("http-errors");
const CartModel = require("../models/cart");
const OrderModel = require("../models/order");
const CartItemModel = require("../models/cartItem");

module.exports = class CartService {
  async create(data) {
    const { userId } = data;

    try {
      // Instantiate new cart and save
      const Cart = new CartModel();
      const cart = await Cart.create(userId);

      return cart;
    } catch (err) {
      throw err;
    }
  }
};
