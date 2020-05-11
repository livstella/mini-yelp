const express = require("express");
const router = express.Router();
const pool = require("../database");



const displayRecipes = (req, res, next) => {
  pool
    .query('SELECT * FROM "recipe";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
};

/*const displayRestaurants = (req, res, next) => {
  pool
    .query('SELECT * FROM "restaurant";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
};

const displayRestaurantID = (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM restaurant WHERE id=$1;", [id])
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(404));
};

const postRestaurants = (req, res) => {
  const { name, adress } = req.body;
  pool
    .query("INSERT INTO restaurant (name, adress) VALUES ($1, $2);", [
      name,
      adress,
    ])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
};
*/
//router.get("/", displayRestaurants);
//router.get("/:id", displayRestaurantID);
//router.post("/", postRestaurants);

router.get("/", displayRecipes);

module.exports = router;
