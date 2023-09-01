// Require libs
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = process.env.port || 8051;
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/status", (req, res) => {
  res.send({
    message: "hello world!",
  });
});

app.listen(port, () => {
  console.log(`Local:   http://localhost:${port}/`);
});
