const userSchema = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


require("dotenv").config();

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        console.log(name);

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields (name, email, password)."
            });
        }

        // Check if the user already exists
        const findExistingUser = await userSchema.findOne({ email });
        if (findExistingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email ID."
            });
        }
        

        const hashedPass = await bcrypt.hash(password, 10);

        const responseDetails = await userSchema.create({
            name,
            email,
            password: hashedPass
        });

        return res.status(201).json({
            success: true,
            data: responseDetails,
            message: "User signed up successfully."
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later."
        });
    }
};





exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email);

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password."
            });
        }

        let user = await userSchema.findOne({ email });
        console.log(user);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found. Please sign up first."
            });
        }

        const payload = {
            email: user.email,
            id: user._id
        };

        console.log(payload);

        if (await bcrypt.compare(password, user.password)) {

            const JWT_SECRET = process.env.JWT_SECRET;
            console.log(JWT_SECRET);
            const token = jwt.sign(payload, JWT_SECRET, {
                expiresIn: "1d"

            });

            user = user.toObject();
            user.token = token;
            user.password = undefined;


            const options = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true
            };

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in successfully."
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password."
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login failed, please try again later."
        });
    }
};
