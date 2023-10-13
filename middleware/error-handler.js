//const {customError} = require("../errors/custom_errors")

module.exports= (err,req,res,next)=>{
    /*if (err instanceof customError){
        return res.staus(err.statusCode).json({message:err.message})
    }*/
    return res.status(500).json({message:"Something went wrong"})
}