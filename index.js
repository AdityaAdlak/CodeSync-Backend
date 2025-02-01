require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");

const app = express();

// CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://code-sync-frontend-kappa.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database Connection
const connection = require("./Config/dbConnectivity");
connection();

// Initial Database Setup (if needed)
const createEntry = require("./Controllers/dbEntry");
createEntry();

// Routes
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
