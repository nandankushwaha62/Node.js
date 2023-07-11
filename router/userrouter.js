const express = require("express") 
const { home, createuser, getusers,deleteUser,editUser} = require("../controllers/usercontroll.js")

const routers = express.Router();
routers.get("/", home)
routers.post('/createuser', createuser)
 
routers.get('/getusers', getusers)

routers.put('/edituser/:id',editUser)
routers.delete('/deleteuser/:id', deleteUser)


module.exports = routers;