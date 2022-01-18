//Dependencys
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Imports

//Middlwares
app.use(express.json());
app.use(cors());

// Database Connection

// Server Port
const Port = process.env.PORT || 5000;
//Routes

//Server listen
app.listen(Port, () => {
  console.log(`Server is running on port : ${Port}`);
});
