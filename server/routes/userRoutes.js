import express from "express";
import {
  Register,
  Login,
  getAllUsers,
  getUserById,
  // Verification,
} from "../controller/userController.js";
// from "../controller/authenticationControl.js";
import validInfo from "../middleware/validInfo.js";
import Authorization from "../middleware/authorization.js";

const router = express.Router();
// GET ALL USERS
router.get("/", getAllUsers);

// GET SPECIFIC USER
router.get("/:pid", getUserById);

// REGISTRATION
router.post("/register", validInfo, Register);

// LOGIN
router.post("/login", validInfo, Login);

// VERIFICATION
// router.get("/verification", Authorization, Verification);

export default router;
