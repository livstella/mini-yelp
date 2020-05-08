const express = require("express");
const bodyparser = require("body-parser");
const restaurantroutes = require("./router_components/Restaurants.js");
const cityroutes = require("./router_components/Cities.js");
const tagroutes = require("./router_components/Tags.js");

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded());
app.use("/restaurant", restaurantroutes);
app.use("/restaurant/:id", restaurantroutes);
app.use("/city", cityroutes);
app.use("/tag", tagroutes);
app.use("/tag/:id", tagroutes);

app.listen(port, () => {
  console.log("Server is up and running!");
});
