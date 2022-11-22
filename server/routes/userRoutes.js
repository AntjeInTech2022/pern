import express from "express";
import {
  Register,
  Login,
  getAllUsers,
  getUserById,
  getProfile,
  updateProfileDescription,
} from "../controller/authenticationControl.js";

import validInfo from "../middleware/validInfo.js";
import { jwtAuth } from "../middleware/passport.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
// GET ALL USERS
router.get("/all", getAllUsers);
// router.get("/all", jwtAuth, getAllUsers);

// PRIVATE ROUTE
router.get("/profile", jwtAuth, getProfile);

router.post("/update", jwtAuth, updateProfileDescription);

// GET SPECIFIC USER
router.get("/:pid", getUserById);

// REGISTRATION
// router.post("/register", Register);
router.post("/register", validInfo, Register);

// LOGIN
// router.post("/login", Login);
router.post("/login", validInfo, Login);

export default router;
