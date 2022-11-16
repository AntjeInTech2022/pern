import express from "express";
import {
  // getAllUsers,
  Register,
  Login,
  Verification,
  Private,
} from "../controller/authenticationControl.js";
import validInfo from "../middleware/validInfo.js";
import Authorization from "../middleware/authorization.js";

const router1 = express.Router();
// GET ALL USERS
// router1.get("/", getAllUsers);

// REGISTRATION
router1.post("/register", validInfo, Register);

// LOGIN
router1.post("/login", validInfo, Login);

// VERIFICATION
router1.get("/verification", Authorization, Verification);

// PRIVATE
router1.get("/", Authorization, Private);

export default router1;

// TEST ROUTES
// router.get("/test", getTestRoute);
// router.post("/newData", createTableData);

// // create new user/host
// router.post("/users", createNewHost);

// // get all users/hosts
// router.get("/users", getAllHosts);

// // get a specific user/host
// router.get("/users/:pid", getUniqueHost);

// // update a user/host
// router.put("/users/:pid", updateUniqueHost);

// // delete a user
// router.delete("/users/:pid", deleteUniqueHost);
