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
  deleteMessageReceived,
  deleteSavedContact,
  deleteAccountSimple
} from "../controller/userController.js";

import validInfo from "../middleware/validInfo.js";
import { jwtAuth } from "../middleware/passport.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


// GET ALL USERS
router.get("/all",getAllUsers);
// PRIVATE ROUTE
router.get("/private",jwtAuth, getUser);
router.get("/inboxSent",jwtAuth, getMessagesSent);
router.get("/inboxReceived",jwtAuth, getMessagesReceived);
// GET SAVED CONTACTS
router.get("/savedContacts",jwtAuth, getSavedContacts);

// EDIT PROFILE HEADLINE
router.put("/updateProfileHeader", jwtAuth, updateProfileHeader);
// EDIT PROFILE DESCRIPTION
router.put("/updateProfileDescription", jwtAuth, updateProfileDescription);
// send message
router.post("/message",jwtAuth, sendMessage);
// REGISTRATION
router.post("/register", validInfo, Register);
// LOGIN
router.post("/login", validInfo, Login);
// ADD USER TO SAVED CONTACTS
router.post("/postFavorites",jwtAuth, post2Favorites);

// DELETE
router.delete("/deleteMessageSent", jwtAuth, deleteMessageSent)
router.delete("/deleteMessagereceived", jwtAuth, deleteMessageReceived)
router.delete("/deleteSavedContact", jwtAuth, deleteSavedContact)
router.delete("/deleteAccount", jwtAuth, deleteAccount)
router.delete("/deleteAccountSimple", jwtAuth, deleteAccountSimple)

export default router;
