import express from "express";
import { getTestRoute, createTableData } from "../controller/testController.js";
const router = express.Router();

router.get("/test", getTestRoute);
router.post("/newData", createTableData);

export default router;

// GET route to query users table using raw SQL and node
