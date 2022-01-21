const { validationResult } = require("express-validator");
const UserModel = require("../../models/User");
const { hashedPassword, jsonwebtoken } = require("../../services/authService");

// @route POST /api/register
// @access Public
// @desc Create user and return a token
module.exports.registerController = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    try {
      const emailExist = await UserModel.findOne({ email });
      if (!emailExist) {
        const hashed = await hashedPassword(password);
        const user = await UserModel.create({
          name,
          email,
          password: hashed,
        });
        const token = jsonwebtoken({ id: user._id, name: user.name });
        return res
          .status(201)
          .json({ msg: "Your account has been created!", token });
      } else {
        // email already taken
        return res
          .status(401)
          .json({ errors: [{ msg: `${email} is already taken` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server internal error!");
    }
  } else {
    // validation failed
    return res.status(400).json({ errors: errors.array() });
  }
};
