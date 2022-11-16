import pg from "pg";
import * as dotenv from "dotenv";
dotenv.config();
const { Pool } = pg;

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     port: process.env.DB_POST
// })
const pool = new Pool();

export default pool;
