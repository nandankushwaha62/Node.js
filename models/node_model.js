const mongoose = require("mongoose");
const {createuser} = require("../controllers/usercontroll.js");
const userschema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'name is required'],
        trim: true,
        maxLength:20,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
})

module.exports = mongoose.model("User",userschema);