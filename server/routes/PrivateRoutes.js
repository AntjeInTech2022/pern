import express from "express";
import { Private } from "../controller/authorizationControl.js";
import Authorization from "../middleware/authorization.js";

const router = express.Router();

//app.use("/private", router);
router.get("/", Authorization, Private);

export default router;
