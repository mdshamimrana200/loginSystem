const routErrorControllers = (err,req,res,next)=>{
    res.status(404).send(err)
}
const serverErrorController = (err,req,res,next)=>{
    res.status(500).send("server is broke")
}

module.exports = {routErrorControllers,serverErrorController}