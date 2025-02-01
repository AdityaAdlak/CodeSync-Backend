require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");

const app = express();

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000", // Local development URL
  "https://code-sync-frontend-kappa.vercel.app" // Vercel production URL
];

// CORS setup
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error("Not allowed by CORS")); // Block if not allowed
    }
  },
  credentials: true, // Allow cookies
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200, // For legacy browsers that require 200 response code for preflight requests
}));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database Connection (ensure this works correctly)
const connection = require("./Config/dbConnectivity");
connection();

// Initial Database Setup (ensure this is running)
const createEntry = require("./Controllers/dbEntry");
createEntry();

// Routes setup
app.use("/user/v1", router);

// Test Route
app.get("/", (req, res) => {
  res.send("This is Page");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
