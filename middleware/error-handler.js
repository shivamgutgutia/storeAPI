module.exports= (err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({message:"Something went wrong"})
}