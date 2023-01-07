const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "db.jdgjltterzxnwrxlkhpc.supabase.co",
  database: "postgres",
  password: "sH5j7r4NCt2ZVOGc",
  port: 5432,
});

module.exports = pool;
