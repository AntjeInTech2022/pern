import express from "express";
import {
  getTestRoute,
  createTableData,
  createNewUser,
  getAllHosts,
  getUniqueHost,
} from "../controller/testController.js";
const router = express.Router();

// router.get("/foo", (req, res) => {
//   console.log("foo runing");
//   res.status(200).json("all fine");
// });
router.get("/test", getTestRoute);
router.post("/newData", createTableData);

// TEST ROUTES

// create new user/host
router.post("/users", createNewUser);

// get all users/hosts
router.get("/users", getAllHosts);

// get a specific user/host
router.get("/users/:pid", getUniqueHost);

// update a name

// delete a name

export default router;

// GET route to query users table using raw SQL and node
