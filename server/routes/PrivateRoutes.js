import express from "express";
import Authorization from "../middleware/authorization.js";
const router = express.Router();

router.get("/", Authorization);

export default router;
