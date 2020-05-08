const { Pool } = require("pg");

const pool = new Pool({
  user: "zwvpkksz",
  host: "kandula.db.elephantsql.com",
  database: "zwvpkksz",
  password: "cjA_3fISiKOC7X2Tc7gbvN-5Aj_cWOu-",
  port: 5432,
});

module.exports = pool;
