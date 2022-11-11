import pool from "../dbConfig.js";

//// TESTS
// Before I created the table 'users_hosts' in the db 'test' via Mac terminal (see my cheat sheet)

// CREATE NEW USER / HOST
// in table users_hosts
const createNewUser = async (req, res) => {
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

// update a user

// delete a user

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

export { getTestRoute, createTableData, createNewUser, getAllHosts };
// export { getTestRoute, createTableData, createNewUser };
