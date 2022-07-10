import express from "express";
const router = express.Router();
import {
  getDataFromUser,
  sendDataToUser,
  deleteTodoFromDB,
  updateTodo,
} from "../controllers/todolist.js";

router.post("/", getDataFromUser);
router.get("/", sendDataToUser);
router.delete("/delete/:id", deleteTodoFromDB);
router.put("/update", updateTodo);

export default router;
