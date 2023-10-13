const asyncWrapper = require("../middleware/async")

const getProduct = asyncWrapper(async (req,res)=>{
    res.send("Hello world")
})

module.exports={getProduct}