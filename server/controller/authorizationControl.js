// import pool from "../dbConfig";
// // import { pool } from "../dbConfig";

// const Private = async (req, res) => {
//   try {
//     //req.user has the payload
//     // res.json(req.user);
//     const user = await pool.query("SELECT * FROM users WHERE pid = $1", [
//       req.user,
//     ]);
//     res.json(user.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// };

// export { Private };
