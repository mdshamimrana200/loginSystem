require("dotenv").config()
exports.config ={
    dev:{
        port: process.env.port || 4000
    },
    dbURL : process.env.URL_DB || "mongodb://localhost:27017/LoginSystem14th"
}