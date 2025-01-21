const mongoose = require("mongoose");


require("dotenv").config();
const connection = async()=>{
    const DB_URL = process.env.DB_URL;

    console.log(DB_URL);
    
    await mongoose.connect(DB_URL,).then(()=>{console.log("Database Connected Successfully...")})
    .catch(()=>{console.log("Error in connecting Database")
        process.exit(1);
    })
}



module.exports = connection;



