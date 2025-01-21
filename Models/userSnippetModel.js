const mongoose = require("mongoose");
const userData = require("../Models/userModel");

const snippetSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    language : {
        type : String,
        required : true
    },

    code : {
        type : String,
        required : true
    },

    note : {
        type : String,
        default :" ",
    },

    approach : {
        type : String,
        default : " ",
    },

},{
    timestamp : true,
})

module.exports = mongoose.model("snippet",snippetSchema);