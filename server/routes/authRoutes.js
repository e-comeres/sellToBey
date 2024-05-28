// routes/authRoutes.js
const router = require("express").Router();

const { login, register } = require("../controllers/authControllers.js");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
