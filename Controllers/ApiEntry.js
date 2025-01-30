const ApiSchema = require("../Models/apiModel");
const snippetsCPP = require("../ApiData/cppDataApi");
const snippetsJava = require("../ApiData/javaDataApi");
const snippetsPython = require("../ApiData/pythonDataApi");



exports.cppApiEntry = async () => {
    try {
        const responses = [];
        for (const snippet of snippetsCPP) {
            const { title, description, code, tags, language } = snippet;

            const response = await ApiSchema.create({
                title,
                description,
                language,
                code,
                tags,
            });

            responses.push(response);
        }
        console.log("C++ snippets added successfully!");
    } catch (error) {
        console.error("Error adding C++ snippets:", error);
    }
};

exports.javaApiEntry = async () => {
    try {
        const responses = [];
        for (const snippet of snippetsJava) {
            const { title, description, code, tags, language } = snippet;

            const response = await ApiSchema.create({
                title,
                description,
                language,
                code,
                tags,
            });

            responses.push(response);
        }
        console.log("Java snippets added successfully!");
    } catch (error) {
        console.error("Error adding Java snippets:", error);
    }
};

exports.pythonApiEntry = async () => {
    try {
        const responses = [];
        for (const snippet of snippetsPython) {
            const { title, description, code, tags, language } = snippet;

            const response = await ApiSchema.create({
                title,
                description,
                language,
                code,
                tags,
            });

            responses.push(response);
        }
        console.log("Python snippets added successfully!");
    } catch (error) {
        console.error("Error adding Python snippets:", error);
    }
};



