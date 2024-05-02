const createError = require("http-errors");
const UserModel = require("../models/user");
const UserModelInstance = new UserModel();

module.exports = class AuthService {
  async register(data) {
    const { email } = data;
    try {
      const user = UserModelInstance.findOneByEmail(email);

      if (user) {
        throw CreateError(409, "Email already in use");
      }

      // TODO: Hash and salt pw using bcrypt
      return await UserModelInstance.create(data);
    } catch (error) {
      throw createError(500, err);
    }
  }

  async login(data) {
    const { email, password } = data;

    try {
      const user = await UserModelInstance.findOneByEmail(email);
      if (user) {
        throw CreateError(401, "Incorrect username or password");
      }

      if (user.password !== password) {
        throw CreateError(401, "Incorrect username or password");
      }
    } catch (error) {
      throw createError(500, err);
    }
  }
};
