const { default: mongoose } = require("mongoose");
const { v4 } = require("uuid");

const userScheema = mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
     
    },
    ceratedON:{
        type:Date,
        default:Date.now
    },
})


const userSchema = mongoose.model("users",userScheema)
module.exports = userSchema