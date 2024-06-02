const express = require("express");
const cors = require("cors");
const db = require("./database/index");
const router = require("./routes/productsRouts");
const routerAuth = require("./routes/authRoutes");
const routerusers = require("./routes/usersRoutes");
const SellerRouter = require("./routes/sellerRoute");
const routerPa = require("./routes/PanierRoutes.js");
const routerAs = require("./routes/sellerAuth.js");
<<<<<<< HEAD
const sellerRoute = require('./routes/oneSellerRoute.js')
=======
const routeradmin=require("./routes/adminRoutes.js")
>>>>>>> 7fb96a18019b9b6aba096f24a5bead8cc5d3c62d
const PORT = 4000;
const app = express();


app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api/auth", routerAuth);
app.use("/api/seller", routerAs);
app.use("/api/users", routerusers);

app.use("/api/admin",routeradmin)

app.use("/api", SellerRouter);
app.use("/api", sellerRoute);
app.use("/api/panier", routerPa);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
