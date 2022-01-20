const express = require("express");
const router = express.Router();
const {
  registerController,
} = require("../../controllers/users/usersController");
const { registerValidations } = require("../../validations/userValidation");

router.post("/register", registerValidations, registerController);

module.exports = router;
