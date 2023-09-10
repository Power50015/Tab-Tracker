// Require libs
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");
require("./passport");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

require("./route")(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(config.port, () => {
    console.log(`Local:   http://localhost:${config.port}/`);
  });
});
