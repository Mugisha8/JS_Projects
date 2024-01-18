import mongoose from "mongoose";

const apartmentsSchema = mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please enter the name of the apartments"],
  },
  location:{
    type:String,
    required:[true,"Enter the Location of the apartment"]
  },
  price:{
  type:String,
  required:true
  }
},
{
  timestamps:true,
})

const apartments = mongoose.model("apartments",apartmentsSchema);

export default apartments;