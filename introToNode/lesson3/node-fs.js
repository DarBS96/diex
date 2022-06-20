const fs = require("fs");

fs.readFile("./myfilename", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
