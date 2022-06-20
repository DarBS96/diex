// Import all of the funcs from greeting file
const a = require("./greeting");
const users = require("./apis/users");
//We have only one export func and not object of funcs so we can call it directly:
users().then((res) => console.log(res));

const name1 = "John Taylor";
const name2 = "Mike Bibas";

// a.greeting(name1);
// a.hello(name2);

// Important points from the lesson:

// Modules:
//Two modules that are built in in node.js: http & fs
// we can write in bash node then http/fs and see all of the methods

// devDependencies vs dependencies:
//devDependencies actually help the developer to manage the app. but my app doesn't need it to run the app.
// for example: nodemon. the app only need node.js but nodemon makes my life easier to run the commands and update the app automatically
// a shortcut for npm install --save-dev : "npm i -D nodemon"
// if we install nodemon globally like that: "npm i nodemon" it will exist as regular package in the dependencies and we don't need it

//  "start": "nodemon app.js"
// npm looking where to start running and listening the app
