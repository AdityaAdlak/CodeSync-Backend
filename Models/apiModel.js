const mongoose = require("mongoose");

const ApiSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    language : {
        type : String,
        enum : ["C++","Java","Python","c++","java","python"]
    },

    code : {
        type : String,
        required : true
    },

    tags : {
        type : [String],
      
    },

},{
    timestamps: true 
})

module.exports = mongoose.model("ApiModel",ApiSchema);