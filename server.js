const express = require("express");
const bodyparser = require("body-parser");
const restaurantroutes = require("./router_components/Restaurants.js");
var cors = require('cors')
///const cityroutes = require("./router_components/Cities.js");
///const tagroutes = require("./router_components/Tags.js");

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyparser.urlencoded());
app.use("/recipe", restaurantroutes);
/*app.use("/restaurant/:id", restaurantroutes);
app.use("/city", cityroutes);
app.use("/tag", tagroutes);
app.use("/tag/:id", tagroutes);
*/
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});