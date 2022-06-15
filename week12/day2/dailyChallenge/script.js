// Part I:
const { largeNumber, currentDate } = require("./main");

const b = 5;

console.log(largeNumber + b);

// Part II:
// Creating server

const http = require("http");

const server3000 = http.createServer((req, res) => {
  console.log("Server running on port 3000");
  res.setHeader("Content-Type", "text/html");
  res.end(
    `My moudle is: <br> ${
      largeNumber + b
    } <br><h1>Hi there at the frontend</h1>`
  );
});

server3000.listen(3000);

// Part III:

const server8080 = http.createServer((req, res) => {
  console.log("Server running on port 3000");
  res.setHeader("Content-Type", "text/html");
  res.end(
    `<p>The date and time are currently: ${currentDate(
      Date.now()
    )} (Israel Daylight Time)</p>`
  );
});

server8080.listen(8080);
