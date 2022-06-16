const addProduct = async () => {
  try {
    const item = document.getElementById("item").value;
    const numOfItem = document.getElementById("number").value;
    const main = document.querySelector(".main");

    // POST method
    // With fetch we send stringify json in the body! with form we send urlencoded
    // we can see it clearly in postman
    const res = await fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ item, numOfItem }),
    });

    //Here I'm getting the data that sent from the app.post() with res(req.body)
    let data = await res.json();
    deleteItems();
    data.forEach(({ item, numOfItem }) => {
      const p = document.createElement("p");
      p.textContent = `${item} : ${numOfItem}`;
      main.append(p);
    });
  } catch (err) {
    console.log(err.message);
  }
};

const deleteItems = () => {
  const items = document.querySelectorAll("p");
  items.forEach((item) => {
    item.remove();
  });
};
