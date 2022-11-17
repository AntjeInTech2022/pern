import bcrypt from "bcrypt";
import pool from "../dbConfig.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query(`SELECT name, email FROM users`); //Checking if user already exists
    console.log("users", users);
    res.status(200).json(users.rows);
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
};
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const user = await pool.query(`SELECT * FROM users WHERE id = $1;`, [id]); //Checking if user already exists
    console.log("user", user);
    res.status(200).json({
      user: user.rows[0],
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
    });
  }
};

export const Register = async (req, res) => {
  console.log("req.body", req.body);
  const { name, email, password } = req.body;
  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]); //Checking if email already exists
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: "Email already there, No need to register again.",
        success: false,
      });
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err)
          res.status(err).json({
            error: "Error encrypting pwd",
            success: false,
          });
        const user = {
          name,
          email,
          password: hash,
        };

        //Inserting data into the database

        pool.query(
          `INSERT INTO users (name, email, password) VALUES ($1,$2,$3);`,
          [user.name, user.email, user.password],
          (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({
                error: "Database error",
                success: false,
              });
            } else {
              const token = jwt.sign(
                //Signing a jwt token
                {
                  email: user.email,
                },
                process.env.jwtSecret
              );
              res.status(200).send({
                success: true,
                name: user.name,
                jwt: token,
              });
            }
          }
        );
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while registering user!", //Database connection error
      success: false,
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await pool.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]); //Verifying if the user exists in the database
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not registered, Sign Up first",
        success: false,
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        //Comparing the hashed password
        if (err) {
          res.status(500).json({
            error: "Server error",
          });
        } else if (result === true) {
          //Checking if credentials match
          const token = jwt.sign(
            {
              email: email,
            },
            process.env.jwtSecret
          );
          res.status(200).json({
            success: true,
            name: user.name,

            token: token,
          });
        } else {
          //Declaring the errors
          if (result != true)
            res.status(400).json({
              error: "Enter correct password!",
              success: false,
            });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
      success: false,
    });
  }
};
