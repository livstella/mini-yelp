const express = require("express");
const router = express.Router();
const pool = require("../database");

const displayCities = (req, res, next) => {
  pool
    .query('SELECT * FROM "city";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
};

/*const postCities = (req, res) => {
  const { name } = req.body;
  pool
    .query("INSERT INTO city (name) VALUES ($1);", [name])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
};*/

router.get("/", displayCities);
//router.post("/", postCities);

module.exports = router;
