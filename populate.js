const connectDB = require("./db/connect")
const products=require("./models/products")
require("dotenv").config()
const jsonProducts = require("./products.json")

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await products.deleteMany();
        await products.create(jsonProducts)
        console.log("Done")
    }catch(err){
        console.log(err)
    }
}

start()