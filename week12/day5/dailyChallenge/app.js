const express = require("express");
const { dirname, resolve } = require("path");
const app = express();

app.use("/", express.static(__dirname + "/public")); // he has already known that i'm in dailyChallenge directory then I only weite in the url on the internet: http://localhost:8080/register.html

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(8080, () => console.log("server running on port 8080"));

const registers = [];

app.post("/register", (req, res) => {
  //   res.sendFile(__dirname + "/public/register.html"); // Must send the dirname+ the location of the file
  registers.push(req.body);
  res.json(registers);
});

app.get("/login", (req, res) => {});
