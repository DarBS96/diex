// Exercise 3 : Express
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is an HTML tag</h1>");
});

app.listen(3000, () => console.log("server running on port 3000"));
