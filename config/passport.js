const passport = require("passport");
const { Strategy } = require("passport-local");
const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const { config } = require("./config");


//passport local stratigy
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

//passport google stratigy
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: config.googleAuth.GOOGLE_CLIENT_ID,
    clientSecret: config.googleAuth.GOOGLE_CLIENT_SECRET,
    callbackURL: config.googleAuth.callbackURL 
  },
  async(accessToken, refreshToken, profile, cb) =>{
     const user = await userSchema.findOne({ id: profile.id })
     if(user){

         return cb(null, user);
        }else{
            const newUser = new userSchema({
                name: profile.displayName,
                id: profile.id
            })
            await newUser.save()
            return cb(null, newUser);
     }
  }
));



passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done)=>{
    const user = await userSchema.findOne({id:id})
    done(null, user);
});


