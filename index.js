//Dependencys
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Imports
const Database = require("./config/database");
const userRoute = require("./routes/users/userRoute");
//Middlwares
app.use(express.json());
app.use(cors());

// Database Connection
Database();

// Server Port
const Port = process.env.PORT || 5000;

//Routes
app.use(userRoute);

//Server listen
app.listen(Port, () => {
  console.log(`Server is running on port : ${Port}`);
});
