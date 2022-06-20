// get the data from the server

const { products } = require("../modules/products.js");

const getProducts = (req, res, next) => {
  res.json(products);
};

const getProduct = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const product = products.find((item) => item.id == id);
  console.log(product);
  if (!product) res.status(404).json({ msg: "msg not found" });
  res.json(product);
};

const filterProduct = (req, res, next) => {
  const name = req.query.q;
  console.log(name);

  //Filtering and displaying all products that has a letter/whole word of product name
  const filterProducts = products.filter((item) => {
    return item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  });
  res.json(filterProducts);
  if (!filterProducts) res.json({ msg: "msg not found" });
};
const deleteProduct = (req, res, next) => {
  const { id } = req.params;
  const idx = products.findIndex((item) => item.id == id);
  if (idx == -1) res.status(404).json({ msg: "not found" });
  products.splice(idx, 1);
  res.json({ msg: "product deleted successfully", products: products });
};

const updateProduct = (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  const idx = products.findIndex((item) => item.id == id);

  if (idx == -1) res.status(404).json({ msg: "not found" });

  const updatedItem = {
    id: products[idx].id,
    name: req.body,
    price: req.price,
  };

  res.status(200).json(updatedItem);
};

const createProduct = (req, res, next) => {
  //   console.log(req.body);
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };

  products.push(newProduct);
  res.json({ newProduct });
};

module.exports = {
  getProducts,
  getProduct,
  filterProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
