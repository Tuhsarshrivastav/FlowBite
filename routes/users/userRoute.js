const express = require("express");
const router = express.Router();
const {
  registerController,
  loginController,
} = require("../../controllers/users/usersController");
const {
  registerValidations,
  loginValidations,
} = require("../../validations/userValidation");

router.post("/register", registerValidations, registerController);
router.post("/login", loginValidations, loginController);
module.exports = router;
