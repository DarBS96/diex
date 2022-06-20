const express = require("express");
const { products } = require("./modules/products");
const cors = require("cors");
// Important insight!
// Root directory: when user looking for root directory :  localhost:5000
//It's equal to localhost:5000/index.html. However we don't need to write the index.html because by default he will look for index.html in my computer directory

//Here we initialize the project
const app = express(); //app is the server

app.listen(5000, () => console.log("server running on port 5000"));

//use it's using a middleware

//Request for the statics file- connect the html file to the server.
//I'm telling the server where is the statics file in my computer and what root to display it
// console.log(__dirname);
app.use("/", express.static(__dirname + "/public")); //express.static()=> it is a callback function when we sending get request to the server

//In the update express version, body parser is coming with express automatically so we don't need to install bodyParser from npm
app.use(express.urlencoded({ extended: false })); // Again it is a middle where- a function that do something for us between the time from sending the request until the server response
app.use(express.json());

// Solving cors policy problems
app.use(cors());

const router = require("./routes/product");
//All of the routes will start with this path
app.use("api/products", router);

// CRUD- (the methods) CREATE READ UPDATE DELETE
// rest - keeping the routes consistent for example: /api/products
