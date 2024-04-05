const routErrorControllers = (req,res)=>{
    res.status(404).send(` <a href="/">Home</a><br><h1>Rout not fount`)
}
const serverErrorController = (err,req,res,next)=>{
    res.status(500).send("server is broke")
}

module.exports = {routErrorControllers,serverErrorController}