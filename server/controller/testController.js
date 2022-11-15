import pool from "../dbConfig.js";

//// TESTS
// Before I created the table 'users_hosts' in the db 'test' via Mac terminal (see my cheat sheet)

// Registration

const Register = async (req, res) => {
  // 1.  destructure the req.body (name,email, password)
  const { email, name, password } = req.body;
  try {
    // 2. check if user exists (if user exists throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email =$1", [
      email,
    ]);
    // if user exists throw error:
    if (user.rows.lenght !== 0) {
      return res.status(401).send("User already exists");
    }
    // 3. bcrypt the user password
    // npm i bcrypt (https://www.npmjs.com/package/bcrypt)
    const bcrypt = require("bcrypt");
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
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// CREATE NEW USER / HOST
// in table users_hosts
const createNewHost = async (req, res) => {
  try {
    console.log("createNewUser");
    console.log("reg.Body");
    const { user_name } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users_hosts (user_name) VALUES ($1)",
      [user_name]
    );
    console.log("newUser", newUser);
    res.status(200).json("newUser table updated");
  } catch (error) {
    console.error(error.message);
  }
};

// GET all users/hosts
const getAllHosts = async (req, res) => {
  console.log("get all hosts");
  const hosts = await pool.query("SELECT * FROM users_hosts");
  console.log("results", hosts);
  res.status(200).json(hosts.rows);
};

// get a specific user/host
const getUniqueHost = async (req, res) => {
  try {
    const { pid } = req.params;

    const host = await pool.query("SELECT * FROM users_hosts WHERE pid = $1", [
      pid,
    ]);
    res.status(200).json(host.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

// update a user/host
const updateUniqueHost = async (req, res) => {
  try {
    const { pid } = req.params;
    const { user_name } = req.body;
    const updateHost = await pool.query(
      "UPDATE users_hosts SET user_name = $1  WHERE pid = $2",
      [user_name, pid]
    );

    res.status(200).json({
      msg: "host name updated",
      info: updateHost.rows,
      length: updateHost.rows.length,
    });
  } catch (error) {
    console.error(error.message);
  }
};

// delete a user/host
const deleteUniqueHost = async (req, res) => {
  try {
    const { pid } = req.params;
    const deleteHost = await pool.query(
      "DELETE from users_hosts WHERE pid = $1",
      [pid]
    );
    res.status(200).json("host was deleted");
  } catch (error) {
    console.error(error.message);
  }
};

///// OLD
const getTestRoute = async (req, res) => {
  console.log("get testroute");
  const results = await pool.query("SELECT * FROM testtable");
  console.log("results", results);
  res.status(200).json(results.fields);
};

const createTableData = async (req, res) => {
  // console.log("worked again");
  console.log("req.body", req.body.column1);
  const results = await pool.query(
    "INSERT INTO testtable (column1, column2, column3) VALUES ($1, $2, $3)",
    [req.body.column1, req.body.column2, req.body.column3]
  );

  console.log("results", results);
  res.status(200).json("table updated");
};

export {
  getTestRoute,
  createTableData,
  createNewHost,
  getAllHosts,
  getUniqueHost,
  updateUniqueHost,
  deleteUniqueHost,
  Register,
};
