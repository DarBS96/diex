//Creating server on our computer

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("get a request from client");
  let obj = { name: "John", email: "john@gmail.com" };
  res.end(JSON.stringify(obj));
});

server.listen(5000);
