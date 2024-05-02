const expressLoader = require("./express");
const passportLoader = require("./passport");

const routeLoader = require("../routes");

module.exports = async (app) => {
  const expressApp = await expressLoader(app);

  // TODO: load Passport Middleware
  const passport = await passportLoader(expressApp);

  // Load API route handlers
  await routeLoader(app, passport);

  app.use((err, req, res, next) => {
    const { message, status } = err;

    return res.status(status).send({ message });
  });
};
