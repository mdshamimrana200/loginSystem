require("dotenv").config()
exports.config ={
    dev:{
        port: process.env.port || 4000
    },
    dbURL : process.env.URL_DB || "mongodb://localhost:27017/LoginSystem14th",
    googleAuth:{
        callbackURL:process.env.callbackURL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET
    }
}