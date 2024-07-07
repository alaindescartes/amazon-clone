// index.js
require("dotenv").config(); // Loads .env file content into process.env

const express = require("express");
const connectDB = require("./config/db");
const Product = require("../server/schemas/product");
const cors = require("cors");

const app = express();

//connect to database
connectDB()

// To allow requests from a specific origin:
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// To allow requests from any origin:
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products.length) {
      return res.status(404).json({ message: "No products found" });
    }
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
