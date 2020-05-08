const express = require("express");
const router = express.Router();
const pool = require("../database");

const displayTags = (req, res, next) => {
  pool
    .query('SELECT * FROM "tag";')
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
};

const displayTagID = (req, res) => {
  const { id } = req.params;
  pool
    .query("SELECT * FROM restaurant WHERE id=$1;", [id])
    .then((data) => res.json(data))
    .catch((e) => res.sendStatus(404));
};

const postTags = (req, res) => {
  const { name } = req.body;
  pool
    .query("INSERT INTO tag (name) VALUES ($1);", [name])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
};

router.get("/", displayTags);
router.get("/:id", displayTagID);
router.post("/", postTags);

module.exports = router;
