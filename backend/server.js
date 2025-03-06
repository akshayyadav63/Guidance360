const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB().catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
});

const app = express();

// CORS Configuration (Allow frontend on port 5173)
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/form", require("./routes/formRoutes"));

// Default API route
app.get("/", (req, res) => {
    res.send("🚀 API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
