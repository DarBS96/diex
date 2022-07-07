import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/todolist.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/todo", router);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
