const path = require("path")
const userSchema = require("../models/userSchema")
const bcrypt = require("bcrypt")
const passport = require("passport")
const { v4 } = require("uuid")

//register : post
const postRegister =async (req,res)=>{
    const {name,email,password,aginPassword} =req.body
    const user = await userSchema.findOne({email:email})
    if(user){
       res.status(404).send("user already created")
    }else{
        if(password == aginPassword){
            bcrypt.hash(password,10,async(err,hash)=>{
                
                const newUser = new userSchema({
                    id:v4(),
                    name,email,password:hash
                })
                await newUser.save()
               
                res.status(201).send("user registed")
            })
        }else(
            res.status(404).send("password mismatch")

        )
    }


    
}
//register : get
const getRegister = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/register.html"))
}
//login : get
const getLogin = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/login.html"))
}
//profile : get
const getProfile = (req,res)=>{
    res.status(200).redirect("/account/login")
}

//login : post
const postlogin =async (req,res,next)=>{
    passport.authenticate("local",{
        failureRedirect:"/account/login",
        successRedirect: "/account/profile"
    })(req,res,next)
}

const checkUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        return res.status(200).sendFile(path.join(__dirname + "/../views/profile.html"))
    }
    next()
}
const getLogout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect("/")
        }
    });


}

const getfirstGoogleAuth = (rq,rs,nx)=>{
    passport.authenticate("google", { scope: ["profile"] })(rq,rs,nx)
}
const getGoogleAuth = (rq,rs,nx)=>{
    passport.authenticate('google', { failureRedirect: '/account/login',successRedirect:"/account/profile" })(rq,rs,nx)
}

module.exports = {getRegister,postRegister,getLogin,postlogin,getProfile,checkUser,getLogout,getGoogleAuth,getfirstGoogleAuth}