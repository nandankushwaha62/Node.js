const User = require("../models/node_model")


exports.home = (req , res) => {
    res.send('hello avery one')
}

 
exports.createuser = async (req, res) => {res
    try {
        const { name, email } = req.body
        if (!name||!email) {
            throw new Error("name and email are required")
        }

        const userExists = User.find({email });
        if (userExists) {
            throw new Error("user already exists")
        }
        const user = await User.create({
            name,
            email
        })
        res.status(201).json({
            success: true,
            message: "user created successfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error.message",
                
        })
    }
}

exports.getusers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "successfull",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error.message",
            users
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req, body)
        res.status(400).json({
            success: true,
            message: "successfully",
                
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error.message",
                
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userid = req.params.id 
        const user = await User.findByIdAndDelete(userid)
        res.status(200).json({
            success:true,
            message: "user deleted successfully",
                
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error.message",
                
        })
    }
}
