const { default: mongoose } = require("mongoose");
const { v4 } = require("uuid");

const userScheema = mongoose.Schema({
    id:{
        type:String,
        default: v4()
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    ceratedON:{
        type:Date,
        default:Date.now
    },
})


const userSchema = mongoose.model("users",userScheema)
module.exports = userSchema