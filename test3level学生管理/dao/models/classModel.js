const mongoose=require("mongoose");
const studentClass= new mongoose.Schema({
 
  name:String,
 
})

mongoose.model("classModel",studentClass,"studentClass");