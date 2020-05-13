const express = require("express");
const router = express.Router();
const pool = require("../database");



const displayRecipes = (req, res, next) => {
  pool
    .query('SELECT * FROM "recipe";')
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
};

const displayCategory = (req, res, next) => {
  pool
    .query('SELECT * FROM "category";')
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
};

const displayCuisine = (req, res, next) => {
  pool
    .query('SELECT * FROM "cuisine";')
    .then((data) => res.json(data))
    .catch((e) => console.log(e));
};

const ingredient = (req, res, next) => {
  pool
    .query('SELECT recipe_id, quantity, measurement_unit.name, ingredient.name FROM list_ingredients INNER JOIN recipe ON recipe.id = list_ingredients.recipe_id INNER JOIN measurement_unit ON measurement_unit.id=list_ingredients.unit_id INNER JOIN ingredient ON ingredient.id=list_ingredients.ingredient_id')
    .then((data) => res.json(data))
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
router.get("/category", displayCategory);
router.get("/cuisine", displayCuisine);
router.get("/ingredients", ingredient);

module.exports = router;
