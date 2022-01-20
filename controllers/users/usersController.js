const { validationResult } = require("express-validator");
module.exports.registerController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors.array());
  }
};
