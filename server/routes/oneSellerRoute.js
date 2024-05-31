const sellerRoute = require("express").Router();
const getOne = require('../controllers/oneSellerController')


sellerRoute.get("./getSeller:id",getOne)

module.exports = sellerRoute


