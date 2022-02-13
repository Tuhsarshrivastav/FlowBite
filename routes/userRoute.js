const express = require("express");
const router = express.Router();
// imports controllers
const {
  registerController,
  loginController,
} = require("../controllers/usersController");
// imports validations 
const {
  registerValidations,
  loginValidations,
} = require("../validations/userValidation");

router.post("/register", registerValidations, registerController);
router.post("/login", loginValidations, loginController);
module.exports = router;
