require("dotenv").config(); // Loads .env file content into process.env
const connectDB = require("../config/db");
const Product = require("../schemas/product");
const mongoose = require("mongoose");
console.log("Database URL in connectDB:", process.env.DATABASE_URL);
console.log(`Current directory: ${process.cwd()}`);

//connect to database
connectDB();

const productCategories = [
  {
    identifier: "shoes",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    identifier: "baby",
    url: "https://i5.walmartimages.com/asr/11e378e5-d4eb-4268-b37f-5a7b1cf534ac_1.a90b54a31a3a178f0c30901721ed6bd3.jpeg",
  },
  {
    identifier: "sports",
    url: "https://i5.walmartimages.com/asr/1919deb4-8b44-4a77-9e83-630d9afe1495_1.5f004859de4efd15aea4c51f25685ddd.jpeg",
  },
  {
    identifier: "clothing",
    url: "https://i.pinimg.com/736x/dc/0a/19/dc0a19f3e94d44a8bca5287cf4305874.jpg",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createRandomProduct() {
  const category = productCategories[getRandomInt(productCategories.length)];
  const product = new Product({
    name: `Product ${category.identifier}`,
    description: `Description of ${category.identifier}`,
    price: getRandomInt(100) + 1, // Prices between $1 and $100
    category: category.identifier,
    stock: getRandomInt(50) + 1, // Stock between 1 and 50
    imageUrl: category.url,
  });
  return product.save();
}

async function insertRandomProducts(count) {
  const promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(createRandomProduct());
  }
  return Promise.all(promises);
}

insertRandomProducts(20)
  .then(() => {
    console.log("Successfully inserted 20 random products.");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error inserting products:", err);
    mongoose.disconnect();
  });
