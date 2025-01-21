
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

exports.auth = (req, res, next) => {
    try {
 
        const token = req.body.token || req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing. Authentication required.",
            });
        }

     
        try {
            const decodedPayload = jwt.verify(token, JWT_SECRET);
            console.log("Decoded Payload:", decodedPayload);

            
            req.user = decodedPayload;
        } catch (error) {
            console.error("Token verification error:", error);
            return res.status(401).json({
                success: false,
                message: "Invalid token. Please log in again.",
            });
        }

   
        next();

    } catch (error) {
        console.error("Authentication middleware error:", error);
        res.status(500).json({
            success: false,
            message: "Authentication failed due to server error.",
        });
    }
};

