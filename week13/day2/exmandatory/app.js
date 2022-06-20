// Exercise 1 : Reading From A File In Node.JS

const express = require("express");
const { fstat } = require("fs");

const app = express();
const fs = require("fs");

fs.readFile("./txt.txt", function (err, data) {
  if (err) console.log(err);
  console.log(data.toString());
});

// Exercise 2 : Writing Files With Node JS

// 1:
let text = "Hi a new file has been added automatically";
fs.writeFile("./newfileadded", text, function (err, data) {
  if (err) console.log(err);
});

// 2:
let appendText = "Hi I have been appended to a new file";
fs.appendFile("./newfileadded", appendText, function (err, data) {
  if (err) return console.log(err);
});

// 3:
fs.unlink("./newfileadded", function (err) {
  if (err) return console.log(err);
});
// app.get("/", (req, res) => {
//   console.log("hi");
//   res.json({ msg: "hi" });
// });

// app.listen(3000, () => console.log("server running on port 3000"));
