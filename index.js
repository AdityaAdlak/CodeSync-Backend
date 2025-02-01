// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const router = require("./Routes/router");

// const app = express();

// // CORS Configuration
// const allowedOrigins = [
//   "https://code-sync-frontend-kappa.vercel.app", // Vercel production URL
//   "http://localhost:3000", // Local development URL
// ];

// app.use(cors({
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       // Allow if origin is in allowed list or if the request is from localhost
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true, // Allow cookies and authentication headers
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   optionsSuccessStatus: 200,
// }));

// // Middleware setup
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Database Connection (ensure this works correctly)
// const connection = require("./Config/dbConnectivity");
// connection();

// // Initial Database Setup (ensure this is running)
// const createEntry = require("./Controllers/dbEntry");
// createEntry();

// // Routes setup
// app.use("/user/v1", router);

// // Test Route
// app.get("/", (req, res) => {
//   res.send("This is Page");
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`App is running on PORT ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");

const app = express();

// Middleware setup
app.use(express.json());  // To handle JSON requests
app.use(express.urlencoded({ extended: true }));  // To handle form submissions
app.use(cookieParser());  // To handle cookies

// Database Connection (ensure this works correctly)
const connection = require("./Config/dbConnectivity");
connection(); // Make sure your connection setup works properly

// Initial Database Setup (ensure this is running)
const createEntry = require("./Controllers/dbEntry");
createEntry(); // Ensure this handles initial DB setup if needed

// Routes setup
app.use("/user/v1", router);  // Make sure router is correctly set up

// Test Route
app.get("/", (req, res) => {
  res.send("This is Page");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});

