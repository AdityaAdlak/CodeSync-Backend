

const ApiSchema = require("../Models/apiModel");

exports.languageMidd= async (req, res) => {
    const { language, tag } = req.params;
    try {
        let query = {};

        console.log("Language:", language);
        console.log("Tag:", tag);

        if (language) {
            // Case-insensitive regex
            query.language = { $regex: new RegExp(language.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), "i") };
        }

        if (tag) {
            // Case-insensitive regex for tags
            query.tags = { $in: [new RegExp(tag.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), "i")] };
        }

        console.log("Query Object:", query);

        const snippets = await ApiSchema.find(query).select("code");
        console.log("Snippets Found:", snippets);

        if (!snippets.length) {
            return res.status(404).json({
                success: false,
                message: "No snippets found...",
            });
        }

        return res.status(200).json({
            success: true,
            data: snippets,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong...",
        });
    }
};

