const snippetSchema = require("../Models/userSnippetModel");


// remaind arrow fn

exports.getAllData = async(req,res)=>
{
    try {
        const response = await snippetSchema.find({});
        if(!response)
        {
            return res.status(500).json({
                success : false,
                message : "Response not available..."
            })
        }

        // already in obj no need to call json

        console.log(response);

        return res.status(200).json({
            success : true,
            data : response,
            message : "Get successfully..."
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Something went wrong..."
        })
    }
}