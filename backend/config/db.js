const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/Guidence_360"; // Default to local MongoDB if env variable is missing

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
