const express = require("express");
const cors = require("cors");
const { request } = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.get("/api/hello", (req, res) => {
  res.json({ hi: "hello" });
});

app.post("/api/hello", (req, res) => {
  console.log(req.body);
  const response = req.body.input;
  res.json(response);
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
