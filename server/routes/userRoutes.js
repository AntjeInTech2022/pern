import express from "express";
import {
  Register,
  Login,
  getAllUsers,
  getUserById,
  getProfile,
} from "../controller/authenticationControl.js";

import validInfo from "../middleware/validInfo.js";
import { jwtAuth } from "../middleware/passport.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
// GET ALL USERS
router.get("/", getAllUsers);

// PRIVATE ROUTE
router.get("/profile", getProfile);

// GET SPECIFIC USER
router.get("/:pid", getUserById);

// REGISTRATION
// router.post("/register", Register);
router.post("/register", validInfo, Register);

// LOGIN
// router.post("/login", Login);
router.post("/login", validInfo, Login);

// router.get("/profile", jwtAuth, getProfile);
// router.get("/profile/userProfile", jwtAuth, getProfile);
// router.get("/profile", authMiddleware, getProfile);
// note on testing in Postman:
// copypaste token from login
// Authorization Type: Bearer Token

export default router;
