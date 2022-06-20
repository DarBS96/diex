// products routes

const express = require("express");
const {
  getProducts,
  getProduct,
  filterProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controllers/products");
const router = express.Router();

router.get("/", getProducts);
router.get("/id", getProduct);
router.get("/search", filterProduct);
router.delete("/id", deleteProduct);
router.put("/id", updateProduct);
router.post("/id", createProduct);

module.exports = router;
