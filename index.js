require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");

const app = express();

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000", // Local development URL
  "https://code-sync-frontend-kappa.vercel.app", // Vercel production URL
  "https://codesync-backend-6-rlsb.onrender.com", // Render backend URL
];

// Enhanced CORS setup
app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Incoming Origin:", origin); // Log incoming origin for debugging
      // Allow requests with no origin (e.g., server-to-server requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the origin
      } else {
        console.error("Blocked by CORS:", origin); // Log blocked origins for debugging
        callback(new Error("Not allowed by CORS")); // Block if not allowed
      }
    },
    credentials: true, // Allow cookies
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    optionsSuccessStatus: 200, // For legacy browsers
  })
);

// Preflight handling for OPTIONS requests
app.options("*", cors());

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

// Catch all route for unmatched paths
app.use((req, res, next) => {
  res.status(404).send({ error: "Not Found" });
});

// Global error handler for server errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging

  // Ensure CORS headers are included in error responses
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.status(500).send({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});