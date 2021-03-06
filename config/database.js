const mongoose = require("mongoose");

const Connect = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log("Successfully Connected With Database");
  } catch (error) {
    console.log(error.message);
    process.exit;
  }
};

module.exports = Connect;
