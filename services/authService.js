const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

module.exports.jsonwebtoken = (user) => {
  const token = jwt.sign({ user }, process.env.jwtSecret, {
    expiresIn: "7d",
  });
  return token;
};

module.exports.comparePassword = async (password, dbPassword) => {
  return await bcrypt.compare(password, dbPassword);
};
