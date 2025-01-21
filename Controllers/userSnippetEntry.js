const snippet = require("../Models/userSnippetModel");
const userData = require("../Models/userModel");



exports.userSnippetEntry = async(req,res)=>{
    try {
        const {title , language , code, note, approach } = req.body;
        
        if(!title , !language , !code )
        {
            return res.status(500).json({
                success : false,
                message : "Please enter mandatory fields..."
            })
        }

        const response = await snippet.create(
            {
                title : title,
                language : language,
                code : code,
                note : note,
                approach : approach,
            }
        )

        console.log(response);
            return res.status(200).json({
                success : true,
                data : response,
                message : "Snippet created successfully..."
            })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Something went wrong..."
        })
    }
};



exports.searchSnippetByTitle = async (req, res) => {
    const { title } = req.params;

    try {
        
        const findSnippet = await snippet.find({
            title: { $regex: title, $options: "i" }, 
        });

        if (!findSnippet || findSnippet.length === 0) {
            return res.status(404).json({
                success: false,
                data: [],
                message: "No snippets found with the given title.",
            });
        }

        return res.status(200).json({
            success: true,
            data: findSnippet,
            message: "Snippet(s) found successfully.",
        });
    } catch (error) {
        console.error("Error in searchSnippetByTitle:", error.message);

        return res.status(500).json({
            success: false,
            message: "Error in fetching snippet.",
            error: error.message,
        });
    }
};



exports.deleteSnippet = async(req,res)=>{
    const {id} = req.params;
    try {
       
        const deleteResponse = await snippet.findByIdAndDelete({_id : id});

        return res.status(200).json({
            success : true,
            message : "Snippet deleted successfully..."
        })
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success : false,
            message : "Unable to delete snippet try again later..."
        })
    }
}


