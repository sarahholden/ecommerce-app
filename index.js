const express = require("express");
const app = express();

// const loaders = require("./loaders");

const { PORT } = require("./config");

async function startServer() {
  // Init application loaders
  // loaders(app);

  app.get("/", (req, res, next) => {
    res.send("Hello World!");
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
}

startServer();
