require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");
const connection = require("./Config/dbConnectivity");
const createEntry = require("./Controllers/dbEntry");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const allowedOrigins = ["http://localhost:3000", "https://code-sync-frontend-kappa.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight requests manually
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

connection();
createEntry();

app.use("/user/v1", router);

app.get("/", (req, res) => {
  res.send("This is Page");
});

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
