// Exercise 2 : HTTP & JSON
// const http = require("http");
// const user = {
//   firstname: "John",
//   lastname: "Doe",
// };
// server = http.createServer((req, res) => {
//   res.end(JSON.stringify(user));
// });

// server.listen(3000, () => console.log("Server is running on port 3000"));

// Exercises XP #2
// Exercise 1 : Express & JSON

const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   const user = {
//     firstname: "John",
//     lastname: "Doe",
//   };
//   res.json(user);
// });

app.listen(3000, () => console.log("server running on port 3000"));

// Exercise 2 : Express & Parameters

app.get("/:id", (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

// Exercise 3: Express & Static Files

app.get("/", (req, res) => {});
