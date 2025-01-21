const snippetsCPP = require("../ApiData/cppDataApi");
const snippetsJava = require("../ApiData/javaDataApi");
const snippetsPython = require("../ApiData/pythonDataApi");

exports.getCppData = async(req,res) =>
{
    try {
        const cppData = snippetsCPP;

        if(!cppData)
        {
            return res.send(500).json({
                success : false,
                message : "Cannot get data..."
            })
        }

        return res.status(200).json({
            success : true,
            data : cppData,
            message : "Data founded successfully.."
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                 success : false,
                message : "Something went wrong..."
            }
        )
    }
}

exports.getJavaData = async(req,res) =>
    {
        try {
            const javaData = snippetsJava;
    
            if(!javaData)
            {
                return res.send(500).json({
                    success : false,
                    message : "Cannot get data..."
                })
            }
    
            return res.status(200).json({
                success : true,
                data : javaData,
                message : "Data founded successfully.."
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json(
                {
                     success : false,
                    message : "Something went wrong..."
                }
            )
        }
    }

exports.getPythonData = async(req,res) =>
        {
            try {
                const pythonData = snippetsPython;
        
                if(!pythonData)
                {
                    return res.send(500).json({
                        success : false,
                        message : "Cannot get data..."
                    })
                }
        
                return res.status(200).json({
                    success : true,
                    data : pythonData,
                    message : "Data founded successfully.."
                })
            } catch (error) {
                console.log(error);
                return res.status(500).json(
                    {
                         success : false,
                        message : "Something went wrong..."
                    }
                )
            }
        }