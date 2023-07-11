const mongoose = require("mongoose");

const MONGODB_URL =process.env.MONGODB_URL||"mongodb://localhost:27017//my_database";

const connectTodb = async () => {
    mongoose.connect(MONGODB_URL)
        .then((conn) => {
        console.log(`connected to DB: ${conn.connection.host}`)
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1)
    })
    
}

module.exports = connectTodb;