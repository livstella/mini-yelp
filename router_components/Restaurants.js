const express = require("express");
const router = express.Router();
const pool = require("../database");



const displayRestaurants = (req, res, next) => {
    pool
      .query('SELECT * FROM "tag";')
      .then(data => res.send(data)) 
      .catch(e => console.log(e)); 
  };

  router.get("/", displayRestaurants)

module.exports = router;
