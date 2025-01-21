


const ApiSchema = require("../Models/apiModel");
const  {cppApiEntry}  = require("./ApiEntry");
const {javaApiEntry} = require("./ApiEntry");
const {pythonApiEntry} = require("./ApiEntry");


const createEntry = async () => {

   
    try {
        
        const cppSnippetCount = await ApiSchema.countDocuments({ language: "C++" });
        console.log(cppSnippetCount);
        if (cppSnippetCount === 0) {
            console.log("No C++ snippets found. Inserting data...");
           await cppApiEntry();
        } else {
            console.log("C++ snippets already exist in the database. Skipping insertion.");
        }

    
        const javaSnippetCount = await ApiSchema.countDocuments({ language: "Java" });
        if (javaSnippetCount === 0) {
            console.log("No Java snippets found. Inserting data...");
            await javaApiEntry();
        } else {
            console.log("Java snippets already exist in the database. Skipping insertion.");
        }

        
        const pythonSnippetCount = await ApiSchema.countDocuments({ language: "Python" });
        if (pythonSnippetCount === 0) {
            console.log("No Python snippets found. Inserting data...");
            await pythonApiEntry();
        } else {
            console.log("Python snippets already exist in the database. Skipping insertion.");
        }

    } catch (error) {
        console.error("Error while checking and inserting data:", error);
    }
};


module.exports = createEntry;