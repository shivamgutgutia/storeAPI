require("dotenv").config()
const connectDB = require("./db/connect")
const express = require("express")
const products = require("./routers/products")
const notFound = require("./middleware/not-found")
const errorHandler=require("./middleware/error-handler")
require("express-async-errors")

const app=express()
app.use(express.json())
app.use("/api/v1/products",products)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT ||3000

const start =  async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }catch(err){
        console.log(err)
    }
}
start()
  
