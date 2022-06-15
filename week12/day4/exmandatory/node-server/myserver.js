// Exercises XP
// Exercise 1 : HTTP

const http = require("http");

server = http.createServer((req, res) => {
  res.write("<h1>This is my first response</h1>");
  res.write("<h2>This is my second response</h2>");
  res.write("<p>This is my third response</p>");
  res.end();
});

server.listen(3000, () => console.log("Server is running on port 3000"));
