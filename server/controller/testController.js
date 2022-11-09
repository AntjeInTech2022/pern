import pool from "../dbConfig.js";

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

export { getTestRoute, createTableData };
