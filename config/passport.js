const passport = require("passport");
const { Strategy } = require("passport-local");
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt")

passport.use(new Strategy({
    usernameField: "email"
},async (email,password,done)=>{
    const user = await userSchema.findOne({email:email});
    if(!user){
        console.log("user incorrect logined");
      return done(null,false)
    }else{
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                console.log("succes logined");
                return done(null,user)
            }else{
                console.log("password incorrect logined");
               return done(null , false)
            }
        })
    }
}))

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done)=>{
    const user = await userSchema.findOne({id:id})
    done(null, user);
});


