const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({

name:{
   type:String,
   required:[true,"please enter the name of the product"] 
}



})