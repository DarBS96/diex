const { default: axios } = require("axios");

const getData = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getData;
