const connectDB = require("./db/connect")
const products=require("./models/products")
require("dotenv").config()
const jsonProducts = require("./products.json")

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await products.deleteMany();
        await products.create(jsonProducts)
        process.exit(0)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()