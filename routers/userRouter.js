const {
  getRegister,
  postRegister,
  getLogin,
  postlogin,
  getProfile,
  checkUser,
  getLogout,
} = require("../controllers/usersControllers");

const usersRouers = require("express").Router();

usersRouers.get("/logout", getLogout);
usersRouers.get("/register", checkUser, getRegister);
usersRouers.get("/login", checkUser, getLogin);
usersRouers.get("/profile", checkUser, getProfile);
usersRouers.post("/login", postlogin);
usersRouers.post("/register", postRegister);

module.exports = { usersRouers };
