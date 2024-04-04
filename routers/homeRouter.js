const { homeController } = require("../controllers/homeControllers")
const homeRouts = require("express").Router()


homeRouts.get("/",homeController)

module.exports = {homeRouts}