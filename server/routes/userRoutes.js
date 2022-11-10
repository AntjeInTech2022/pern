import express from "express";
import {
  getTestRoute,
  createTableData,
  createNewUser,
} from "../controller/testController.js";
const router = express.Router();

// router.get("/foo", (req, res) => {
//   console.log("foo runing");
//   res.status(200).json("all fine");
// });
router.get("/test", getTestRoute);
router.post("/newData", createTableData);

// TEST ROUTES

// create new user
router.post("/usersHosts", createNewUser);

// get all names

// get a specific name

// update a name

// delete a name

export default router;

// GET route to query users table using raw SQL and node
