const path = require("path")

const homeController = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/../views/index.html"))
} 


module.exports = {homeController}