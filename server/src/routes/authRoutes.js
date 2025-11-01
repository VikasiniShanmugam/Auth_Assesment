const express = require("express");
const { register, login } = require("../controllers/authController");
const { validateRegister, validateLogin, validate } = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/register", validateRegister, validate, register);
router.post("/login", validateLogin, validate, login);

module.exports = router;
