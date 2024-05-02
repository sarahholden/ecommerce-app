const express = require("express");
const router = express.Router();

// Instantiate Services
const AuthService = require("../services/AuthService");
const AuthServiceInstance = new AuthService();

module.exports = (app, passport) => {
  app.use("/auth, router");
};
