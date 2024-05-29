const SellerRoute = require("express").Router();

const {
  getSeller,
  getOneSeller,
  addSeller,
  updateSeller,
  removeSeller,
} = require("../controllers/sellerController");

SellerRoute.post("/seller", addSeller);
SellerRoute.put("/seller/:id", updateSeller);
SellerRoute.delete("/seller/:id", removeSeller);
SellerRoute.get("/seller", getSeller);
SellerRoute.get("/seller/:id", getOneSeller);

module.exports = SellerRoute;