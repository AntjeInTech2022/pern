import pool from "../dbConfig.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwtGenerator.js";
import {getCurrentDate} from '../utils/currentDate.js'

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
      return res.status(400).json({
        error: "User email already exists. No need to register again.",
        success: false,
      });
    } else {
      // 3. bcrypt the user password
      // npm i bcrypt (https://www.npmjs.com/package/bcrypt)
      // const bcrypt = require("bcrypt");
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      const bcryptPassword = await bcrypt.hash(password, salt);
      // 4. add new user to database table 'users'
      const register_date = getCurrentDate()

      const newUser = await pool.query(
        "INSERT INTO users (user_name, user_email, user_password, registration_date) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, bcryptPassword, register_date]
      );

      // 5. generate jwt token
      // npm install dotenv
      const token = jwtGenerator(newUser.rows[0].pid);
      // res.status(200).json({ user: newUser.rows[0], token, success: true });
      res.status(200).json({  token, success: true });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Database error while registering user!", //Database connection error
      success: false,
    });
  }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query(`SELECT pid, user_name, profile_header, profile_description, registration_date FROM users`); 
    // console.log("users", users);
    res.status(200).json(users.rows);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
};

// GET USER BY ID

// const getUserById = async (req, res) => {
//   try {
//     const { pid } = req.params;

//     const user = await pool.query(`SELECT * FROM users WHERE pid = $1;`, [pid]); //Checking if user already exists
//     console.log("user", user);
//     res.status(200).json({
//       user: user.rows[0],
//       success: true,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: error,
//       success: false,
//     });
//   }
// };

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
      return res.status(400).json({
        error: "User is not registered. Sign Up first",
        success: false,
      });
    }
    // 3. check if incoming password is the same as the db pw
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    console.log("validPassword", validPassword);

    if (!validPassword) {
      return res.status(400).json({
        error: "Enter correct password!",
        success: false,
      });
    }

    // 4. give them the jwt token
    const token = jwtGenerator(user.rows[0].pid);
    // res.json({ token, user: user.rows[0], success: true });
    res.json({ token, success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
      success: false,
    });
  }
};

/// PRIVATE ROUTE
const getUser = async (req, res) => {
  const user = req.user
  // console.log("user >>>>", user);
  console.log("req>>>>", req.user);
  if (user) { 
    res.status(201).json({user, success: true});
  } else 
{  
res.json(503).json({
  user: null,
  error: "Database error occurred while signing in!", //Database connection error
  success: false})
;}
};

//create/edit a profile_header
const updateProfileHeader = async (req, res) => {
  try {
    // console.log("updateProfileDescription1 req.body", req.body);
    const { pid } = req.user;
    // console.log("req.user", pid);
    const { profile_header } = req.body;
    const updateProfileTxt = await pool.query(
      "UPDATE users SET profile_header= $1 WHERE pid = $2",
      [profile_header, pid]
    );

    // res.json("Profile header is updated");
    // res.json(updateProfileTxt.rows[0]);
    res.status(200).json({success: true});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Database error", //Database connection error
      success: false,
    });
  }
};

//create/edit a profile_description
const updateProfileDescription = async (req, res) => {
  try {
    // console.log("updateProfileDescription1 req.body", req.body);
    const { pid } = req.user;
    const { profile_description } = req.body;
    const updateProfileTxt = await pool.query(
      "UPDATE users SET profile_description= $1 WHERE pid = $2",
      [profile_description, pid]
    );

    res.status(200).json({success: true});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Database error", //Database connection error
      success: false,
    });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { pid } = req.user;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE pid = $1",
      [pid]
    );
    res.status(200).json({success: true});
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: "Database error", 
      success: false,
    });
  }
}

//sent a message
const sendMessage = async (req, res) => {

  try {
  const sender_id = req.user.pid;
  const sender_name = req.user.user_name;
  console.log('sender_id', sender_id)
  // const { pid } = req.user;
  const { receiver_id, mssg_title, mssg_text, } = req.body
  const newMessage = await pool.query(`INSERT INTO messages (sender_id, receiver_id, sender_name, mssg_title, mssg_text)
                                        VALUES ($1,$2,$3,$4,$5) RETURNING *`,
                                        [sender_id, receiver_id, sender_name,  mssg_title, mssg_text]);
    // res.status(200).json({success: true, newMessage});
    res.status(200).json({success: true});
  } catch (error) {
    console.log('error send message', error.message);
    res.status(500).json({
      error: "Database error", 
      success: false,
    });
  }
};

export {
  Register,
  Login,
  getAllUsers,
  // getUserById,
  getUser,
  updateProfileHeader,
  updateProfileDescription,
  deleteAccount,
  sendMessage
};
