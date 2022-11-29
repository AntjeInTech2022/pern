import express from "express";
import {
  Register,
  Login,
  getAllUsers,
  // getUserById,
  getUser,
  updateProfileHeader,
  updateProfileDescription,
  deleteAccount,
  sendMessage
} from "../controller/userController.js";

import validInfo from "../middleware/validInfo.js";
import { jwtAuth } from "../middleware/passport.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


// GET ALL USERS
router.get("/all",getAllUsers);
// router.get("/all", jwtAuth, getAllUsers);

// PRIVATE ROUTE
router.get("/private",jwtAuth, getUser);

// EDIT PROFILE HEADLINE
router.put("/updateProfileHeader", jwtAuth, updateProfileHeader);

// EDIT PROFILE DESCRIPTION
router.put("/updateProfileDescription", jwtAuth, updateProfileDescription);

// GET SPECIFIC USER
// router.get("/:pid", getUserById);

// sent message
// router.get("/:pid/message", sendMessage);
// router.put("/message",jwtAuth, sendMessage);

// REGISTRATION
// router.post("/register", Register);
router.post("/register", validInfo, Register);

// LOGIN
// router.post("/login", Login);
router.post("/login", validInfo, Login);

// DELETE
router.delete("/delete", jwtAuth, deleteAccount)

export default router;
