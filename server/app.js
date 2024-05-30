const express = require("express");
const cors = require("cors");
const db = require("./database/index");
const router = require("./routes/productsRouts");
const routerAuth = require("./routes/authRoutes");
const routerusers=require("./routes/usersRoutes")
const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api/auth", routerAuth);
app.use("/api/users",routerusers)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
