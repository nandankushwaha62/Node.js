 require('dotenv').config();
const express = require('express')
const cors=require("cors")
const connectTodb=require("../config/db.js")

const app = express();
//express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

//init connection to db
connectTodb();

const userRouter=require('../router/userrouter.js')

app.use('/',userRouter)

module.exports = app;