const expressLoader = require("./express");
const routeLoader = require("../routes");

module.exports = async (app) => {
  const expressApp = await expressLoader(app);

  // TODO: load Passport Middleware

  // Load API route handlers
  await routeLoader(app, passport);
};
