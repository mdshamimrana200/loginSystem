const { default: mongoose } = require("mongoose");
const { config } = require("../config/config");

const url = config.dbURL
mongoose.connect(url)
.then(()=>{
    console.log("db is connected");
})
.catch((e)=>{
    console.log(e);
})