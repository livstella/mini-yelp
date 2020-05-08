const { Pool } = require("pg");

const pool = new Pool({
  user: "mkyetkss",
  host: "rogue.db.elephantsql.com",
  database: "mkyetkss",
  password: "mZ3U6K3vHXp16kkBi9wOKTnmmOw35ix9",
  port: 5432,
});

module.exports = pool;
