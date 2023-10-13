const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a product name"]
    },

    price:{
        type:Number,
        required:[true,"Please enter a product price"]
    },

    features:{
        type:Boolean,
        default:false
    },

    rating:{
        type:Number,
        default:4
    },

    createdAt:{
        type:Date,
        default:Date.now()
    },

    company:{
        type:String,
        enum:{
            values:["ikea","liddy","caressa","marcos",""],
            message:"Please enter a valid value"
        }
    }


})

module.exports = mongoose.model("Product",productSchema)
