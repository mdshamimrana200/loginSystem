const { routErrorControllers, serverErrorController } = require("../controllers/errorController")

const errRouter = require("express").Router()


errRouter.use(routErrorControllers)
errRouter.use(serverErrorController)

module.exports = {errRouter}