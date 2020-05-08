const express = require("express");
const bodyparser = require("body-parser");
const restaurantroutes = require("./router_components/Restaurants.js")

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded());
app.use("/restaurant", restaurantroutes);

app.listen(port, () => {
  console.log("Server is up and running!");
});
