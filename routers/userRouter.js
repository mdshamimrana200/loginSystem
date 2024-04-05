const {
  getRegister,
  postRegister,
  getLogin,
  postlogin,
  getProfile,
  checkUser,
  getLogout,
  getGoogleAuth,
  getfirstGoogleAuth,
} = require("../controllers/usersControllers");

const usersRouers = require("express").Router();

usersRouers.get("/register", checkUser, getRegister);
usersRouers.get("/login", checkUser, getLogin);
usersRouers.get("/profile", checkUser, getProfile);
usersRouers.post("/login", postlogin);
usersRouers.post("/register", postRegister);
usersRouers.get("/logout", getLogout);
usersRouers.get("/auth/google", getfirstGoogleAuth);
usersRouers.get("/auth/google/callback", getGoogleAuth);
module.exports = { usersRouers };
