const createError = require("http-errors");
const UserModel = require("../models/user");
const UserModelInstance = new UserModel();
const bcrypt = require("bcrypt");

module.exports = class AuthService {
  async register(data) {
    const { email, password } = data;

    try {
      // Check if user already exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If user already exists, reject
      if (user) {
        throw createError(409, "Email already in use");
      }

      // Hash password before storing in local DB:
      const salt = await bcrypt.genSalt(10);
      const hashedPw = await bcrypt.hash(password, salt);

      const newUser = { email: email, password: hashedPw };

      // User doesn't exist, create new user record
      return await UserModelInstance.create(newUser);
    } catch (err) {
      throw createError(500, err);
    }
  }

  async login(data) {
    const { email, password } = data;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByEmail(email);

      // If no user found, reject
      if (!user) {
        throw createError(401, "Incorrect username or password");
      }

      const matchedPassword = bcrypt.compare(password, user.password);
      // Check for matching passwords
      if (!matchedPassword) {
        throw createError(401, "Incorrect username or password");
      }

      return user;
    } catch (err) {
      throw createError(500, err);
    }
  }
};
