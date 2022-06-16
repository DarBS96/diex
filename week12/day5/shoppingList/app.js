const express = require("express");
const path = require("path");
const { resolve } = require("path/win32");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(5000, () => console.log("server running on port 5000"));

const items = [];
app.post("/api", (req, res) => {
  //Here I'm getting the data from the fetch that i'm sending to the body from script.js file
  console.log(req.body);
  items.push(req.body);
  res.json(items);
});
