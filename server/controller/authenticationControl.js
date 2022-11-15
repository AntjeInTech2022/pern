import pool from "../dbConfig.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";

// REGISTRATION table: users
const Register = async (req, res) => {
  // 1.  destructure the req.body (name,email, password)
  const { email, name, password } = req.body;
  try {
    // 2. check if user exists (if user exists throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email =$1", [
      email,
    ]);
    // if user exists throw error:
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }
    // 3. bcrypt the user password
    // npm i bcrypt (https://www.npmjs.com/package/bcrypt)
    // const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword = await bcrypt.hash(password, salt);
    // 4. add new user to database table 'users'
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    res.json(newUser.rows[0]);

    // 5. generate jwt token
    // npm install dotenv
    const token = jwtGenerator(newUser.rows[0].pid);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error registration");
  }
};

// LOGIN table: users
const Login = async (req, res) => {
  // 1.  destructure the req.body (email, password)
  const { email, password } = req.body;
  try {
    // 2.  check if user doesn't exist (if not throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email =$1", [
      email,
    ]);
    // if user doesnt exist throw error:
    if (user.rows.length === 0) {
      return res
        .status(401)
        .send("User doesn't exists / PW or email is incorrect");
      // .json("User doesn't exists / PW or email is incorrect");
    }
    // 3. check if incoming password is the same as the db pw
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    console.log("validPassword", validPassword); // working
    if (!validPassword) {
      return res.status(401).json("PW or email is incorrect");
    }
    // 4. give them the jwt token
    const jwtToken = jwtGenerator(user.rows[0].pid);
    res.json({ jwtToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error login");
  }
};

// VERIFICATION table: users
const Verification = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

export { Register, Login, Verification };
