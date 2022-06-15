// Daily Challenge: Express

const express = require("express");
const path = require("path");

const app = express();

//What happens when I want to get multi html files
app.use("/form", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.listen(3000, () => console.log("server running on port 3000"));

app.get("/aboutMe/:hobby", (req, res) => {
  const { hobby } = req.params;
  if (typeof hobby !== "string") res.status(404).send("Not Valid");
  res.status(200).json(req.params);
});

app.get("/pic", (req, res) => {
  res.send(
    `<img src='https://www.familyfreshmeals.com/wp-content/uploads/2021/02/How-to-make-Rainbow-Noodles-6.jpg'></img>`
  );
});

app.post("/formData", (req, res) => {
  //   console.log(req.body);
  const { message, email } = req.body;
  //   console.log(message, email);
  res.send(`<h1>${email} sent you a message "${message}"</h1>`);
});
