const routerPa = require("express").Router();
const {
  getAllPanier,
  addToPanier,
  removeFromPanier,
} = require("../controllers/panierControlle.js");

routerPa.get("/allPanier", getAllPanier);
routerPa.post("/addToPanier", addToPanier);
routerPa.delete("/delPanier/:productId", removeFromPanier);

module.exports = routerPa;
