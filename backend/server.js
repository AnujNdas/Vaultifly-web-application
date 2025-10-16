const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app = express();

console.log("Brevo API Key:", process.env.BREVO_API_KEY ? "Loaded ✅" : "Missing ❌");

// ✅ Allow frontend URLs
app.use(
  cors({
    origin: ["http://localhost:5173", "https://vaultifly-frontend.onrender.com"], // add your frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
