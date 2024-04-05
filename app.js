const express = require("express");
const { homeRouts } = require("./routers/homeRouter");
const { errRouter } = require("./routers/errRouter");
const { usersRouers } = require("./routers/userRouter");
const app = express();
const cors = require("cors");
const { sessionConfig } = require("./config/session");
require("./models/dbConnect")
require("./config/passport")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('trust proxy', 1) 
app.use(sessionConfig)

//home router
app.use(homeRouts)
//users router
app.use("/account",usersRouers)
//error router
app.use(errRouter)




module.exports = app 