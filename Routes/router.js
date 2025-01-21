const express = require("express");
const router = express.Router();

const {signup,login} = require("../Controllers/userAuth");
const {auth} = require("../Middlewares/auth");
const {languageMidd} = require("../Controllers/language");
const {userSnippetEntry , searchSnippetByTitle , deleteSnippet , updateSnippet} = require("../Controllers/userSnippetEntry");
const {getCppData,getJavaData,getPythonData} = require("../Controllers/getData");
const {getAllData} = require("../Controllers/GetAllData");


router.post("/signup",(req,res)=>{
    signup(req,res);
});


router.post("/login",(req,res)=>{
    login(req,res);
});

router.get("/getAllData",(req,res)=>{
    getAllData(req,res);
})
router.get("/test",auth  , (req,res)=>{
    res.status(200).json({
        success : true,
        message : "Logged in successfully..."
    });
}) 

router.get("/getdata/:language/:tag",(req,res)=>{
    languageMidd(req,res);
})

router.post("/createSnippet",(req,res)=>{
    userSnippetEntry(req,res);
})

router.get("/searchSnippet/:title",(req,res)=>{
    searchSnippetByTitle(req,res);
})

router.delete("/deleteSnippet/:id",(req,res)=>{
    deleteSnippet(req,res);
})
module.exports = router;