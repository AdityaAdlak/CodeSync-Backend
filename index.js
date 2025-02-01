require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./Routes/router");

const app = express();





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.use(cors({
  origin: ["http://localhost:3000", "https://code-sync-frontend-kappa.vercel.app/"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,  
}));



const connection = require("./Config/dbConnectivity");
 connection();

 const createEntry = require("./Controllers/dbEntry");
 createEntry();
 



app.use("/user/v1", router);

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
  res.send("This is Page");
});


app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
