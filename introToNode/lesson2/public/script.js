const addProduct = () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  //POST method
  //With fetch we send stringify json in the body! with form we send urlencoded
  // we can see it clearly in postman
  fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, price }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

addProduct();
