// don't push file to GitHUB
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const connectionString = process.env.ELEPHANT

const pool = new Pool({
  connectionString,
});

  // user: process.env.PGUSER,
  // password: process.env.PGPASSWORD,
  // host: process.env.PGHOST,
  // database: process.env.PGNAME,
  // port: process.env.PGPORT,




export default pool;
