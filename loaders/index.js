const expressLoader = require("./express");
const routeLoader = require("../routes");

module.exports = async (app) => {
  const expressApp = await expressLoader(app);
};
