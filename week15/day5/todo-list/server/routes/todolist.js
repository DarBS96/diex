import express from "express";
const router = express.Router();
import { getDataFromUser, sendDataToUser } from "../controllers/todolist.js";

router.post("/", getDataFromUser);
router.get("/", sendDataToUser);
export default router;
