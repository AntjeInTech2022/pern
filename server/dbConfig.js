// don't push file to GitHUB
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "tester",
  password: "123456",
  host: "localhost",
  database: "test",
  port: "5432",
});

export default pool;
