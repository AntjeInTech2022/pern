import express from "express";
import {
  getTestRoute,
  createTableData,
  createNewHost,
  getAllHosts,
  getUniqueHost,
  updateUniqueHost,
  deleteUniqueHost,
  Register,
  Login,
  Verification,
} from "../controller/testController.js";
import validInfo from "../middleware/validInfo.js";
import Authorization from "../middleware/authorization.js";

const router = express.Router();

// REGISTRATION
router.post("/register", validInfo, Register);

// LOGIN
router.post("/login", validInfo, Login);

// VERIFICATION
router.get("/verification", Authorization, Verification);

// TEST ROUTES
router.get("/test", getTestRoute);
router.post("/newData", createTableData);

// create new user/host
router.post("/users", createNewHost);

// get all users/hosts
router.get("/users", getAllHosts);

// get a specific user/host
router.get("/users/:pid", getUniqueHost);

// update a user/host
router.put("/users/:pid", updateUniqueHost);

// delete a user
router.delete("/users/:pid", deleteUniqueHost);

export default router;

// GET route to query users table using raw SQL and node
