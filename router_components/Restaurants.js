const express = require("express");
const router = express.Router();
const pool = require("../database");

const displayRestaurants = (req, res, next) => {
  pool
    .query('SELECT * FROM "restaurant";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
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

router.get("/", displayRestaurants);
router.post("/", postRestaurants);

module.exports = router;
