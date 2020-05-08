const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded());

app.listen(port, () => {
  console.log("Server is up and running!");
});
