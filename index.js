require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");
const connection = require("./Config/dbConnectivity");
const createEntry = require("./Controllers/dbEntry");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "https://code-sync-frontend-kappa.vercel.app"], // ✅ No trailing slash
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow necessary headers
    credentials: true, // ✅ Enable cookies/auth headers
  })
);

// Handle preflight requests explicitly
app.options("*", cors());

// Connect to database
connection();
createEntry();

// Routes
app.use("/user/v1", router);

// Default route
app.get("/", (req, res) => {
  res.send("This is Page");
});

// Start server
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
