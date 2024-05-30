const SellerRoute = require("express").Router();

const {
  getSellerProd,
  getOneSellerProd,
  addSellerProd,
  updateSellerProd,
  removeSellerProd,
} = require("../controllers/sellerController");

SellerRoute.post("/seller", addSellerProd);
SellerRoute.put("/seller/:id", updateSellerProd);
SellerRoute.delete("/seller/:id", removeSellerProd);
SellerRoute.get("/seller", getSellerProd);
SellerRoute.get("/seller/:id", getOneSellerProd);

module.exports = SellerRoute;