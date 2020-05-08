const express = require("express");
const router = express.Router();
const pool = require("../database");

const displayTags = (req, res, next) => {
  pool
    .query('SELECT * FROM "tag";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
};

const postTags = (req, res) => {
  const { name } = req.body;
  pool
    .query("INSERT INTO tag (name) VALUES ($1);", [name])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
};

router.get("/", displayTags);
router.post("/", postTags);

module.exports = router;
