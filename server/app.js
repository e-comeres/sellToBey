const express = require("express");
const cors = require("cors");
const db = require("./database/index");
const router = require("./routes/productsRouts");
const routerAuth = require("./routes/authRoutes");
<<<<<<< HEAD
const SellerRouter =  require("./routes/sellerRoute")
const routerPa = require("./routes/PanierRoutes.js");
=======
const routerusers = require("./routes/usersRoutes");
const SellerRouter = require("./routes/sellerRoute");
const routerPa = require("./routes/PanierRoutes.js");
const routerAs = require("./routes/sellerAuth.js");
>>>>>>> e1c39bdbafcb5b32f130c4e68172aa57328d749d
const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api/auth", routerAuth);
<<<<<<< HEAD
app.use("/api", SellerRouter);
app.use("/api/panier", routerPa);
=======
app.use("/api/seller", routerAs);
app.use("/api/users", routerusers);

app.use("/api", SellerRouter);

app.use("/api/panier", routerPa);

>>>>>>> e1c39bdbafcb5b32f130c4e68172aa57328d749d
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
