const greeting = (name) => {
  console.log(`hello ${name} welcome to node.js`);
};

const hello = (name) => {
  console.log(`hello ${name}`);
};

//Exports many funcs
module.exports = { greeting, hello };
