require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS for frontend URLs
app.use(cors({
  origin: ["http://localhost:3000", "https://codesync-frontend-1.onrender.com"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,  // Allow credentials (cookies, auth tokens)
}));

// Log incoming requests (for debugging CORS issues)
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  console.log("Request headers:", req.headers);
  next();
});

// Database connection
const connection = require("./Config/dbConnectivity");
connection();

// Initialize entries (if needed)
const createEntry = require("./Controllers/dbEntry");
createEntry();

// Use routes
app.use("/user/v1", router);

// Test route
app.get("/", (req, res) => {
  res.send("This is Page");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
