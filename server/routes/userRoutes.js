import express from "express";
import {
  Register,
  Login,
  getAllUsers,
  getUserById,
  getProfile,
  updateProfileHeader,
  updateProfileDescription
} from "../controller/userController.js";

import validInfo from "../middleware/validInfo.js";
import { jwtAuth } from "../middleware/passport.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
// jwt Auth Check
router.get("/verified", jwtAuth, async (req, res) =>
{
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error")
  }
}
);

// GET ALL USERS
router.get("/all", getAllUsers);
// router.get("/all", jwtAuth, getAllUsers);

// PRIVATE ROUTE
router.get("/profile", jwtAuth, getProfile);

// EDIT PROFILE HEADLINE
router.put("/updateProfileHeader", jwtAuth, updateProfileHeader);

// EDIT PROFILE DESCRIPTION
router.put("/updateProfileDescription", jwtAuth, updateProfileDescription);

// GET SPECIFIC USER
router.get("/:pid", getUserById);

// REGISTRATION
// router.post("/register", Register);
router.post("/register", validInfo, Register);

// LOGIN
// router.post("/login", Login);
router.post("/login", validInfo, Login);

export default router;
