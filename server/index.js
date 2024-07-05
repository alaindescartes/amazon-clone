// index.js
require("dotenv").config(); // Loads .env file content into process.env
const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to database
connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
