const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(5000, () => console.log("server running on port 5000"));

const items = [];
app.post("/", (req, res) => {
  const { item, number } = req.body;
  items.push({ item, number });
  console.log(items);
  res.write(`<h1>My Shopping list</h1>`);
  res.write(`<input type="text">`);
  res.write(`<input type="text">`);
  res.write(`<button>Submit</button>`);
  items.forEach(({ item, number }) =>
    res.write(`<ul><li>${item} : ${number}</li></ul>`)
  );
  res.send();
});
