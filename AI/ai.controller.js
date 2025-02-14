
const {generateContent} = require("../AI/ai.service");
exports.promptFinder = async(req,res)=>
{
    try {
    const { language, tag } = req.params;
    if(!language || !tag)
    {
        return res.status(400).json({
            success : false,
            message : "Enter valid elements..."
        })  
    }

    const prompt = `give only function code of the ${tag} in language ${language}`;

    const response = await generateContent(prompt);
    console.log("AI response" , response);

    return res.status(200).json({
        success : true,
        message : "Snippet founded successfully...",
        data : [{code : response}]
    });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Something went wrong"
        })
    }
}