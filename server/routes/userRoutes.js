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
  sendMessage,
  getMessagesSent,
  getMessagesReceived,
  post2Favorites,
  getSavedContacts,
  deleteMessageSent,
  deleteMessageReceived
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

router.get("/inboxSent",jwtAuth, getMessagesSent);

router.get("/inboxReceived",jwtAuth, getMessagesReceived);

// EDIT PROFILE HEADLINE
router.put("/updateProfileHeader", jwtAuth, updateProfileHeader);

// EDIT PROFILE DESCRIPTION
router.put("/updateProfileDescription", jwtAuth, updateProfileDescription);

// GET SPECIFIC USER
// router.get("/:pid", getUserById);

// ADD USER TO SAVED CONTACTS
router.post("/postFavorites",jwtAuth, post2Favorites);

// GET SAVED CONTACTS
router.get("/savedContacts",jwtAuth, getSavedContacts);

// send message
router.post("/message",jwtAuth, sendMessage);

// REGISTRATION
// router.post("/register", Register);
router.post("/register", validInfo, Register);

// LOGIN
// router.post("/login", Login);
router.post("/login", validInfo, Login);

// DELETE
router.delete("/deleteMessageSent", jwtAuth, deleteMessageSent)
router.delete("/deleteMessagereceived", jwtAuth, deleteMessageReceived)
router.delete("/deleteAccount", jwtAuth, deleteAccount)

export default router;
