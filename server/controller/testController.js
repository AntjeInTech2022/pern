import pool from "../dbConfig.js";

const getTestRoute = async (req, res) => {
  const results = await pool.query("SELECT * FROM testtable");
  console.log("results", results);
  res.status(200).json(results.fields);
};

const createTableData = async (req, res) => {
  console.log("works");
  const results = await pool.query(
    "INSERT INTO testtable (name, lastname) VALUES ('value1', 'value2)"
  );

  console.log("results", results);
};

export { getTestRoute, createTableData };
