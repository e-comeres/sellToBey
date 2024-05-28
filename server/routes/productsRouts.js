const router = require("express").Router();

const {
  getProducts,
  addProduct,
  getOneProduct,
  update,
  remove,
  getByCategory,
} = require("../controllers/ProductsControllers");

router.get("/products", getProducts);
router.post("/products", addProduct);
router.get("/products/:id", getOneProduct);
router.get("/products/category/:category", getByCategory);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

module.exports = router;
