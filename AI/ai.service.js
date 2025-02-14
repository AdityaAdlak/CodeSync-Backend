
const dotenv = require("dotenv")
const { GoogleGenerativeAI } = require("@google/generative-ai")

dotenv.config();

//create instance of generative AI


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({model : "gemini-2.0-flash"});

// process 10000 lines of code

const generateContent = async(prompt)=>
{
    try {
        console.log("Prompt sent:", prompt);
        const result = await model.generateContent(prompt);
        const response = result.response.candidates[0].content.parts[0].text;
        return response;
    } catch (error) {
        console.error("AI Service Error:", error);
        throw new Error("AI service failed to generate content");
    }

}

module.exports = {generateContent};



// const result = await model.generateContent(prompt);
// console.log(result.response.text());

