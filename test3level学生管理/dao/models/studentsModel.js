const mongoose=require("mongoose");
//结构名字
const student= new mongoose.Schema({
  // id:String,
  name:String,
  age:String,
  sex:String,
  classId:{
    // 设置 classid的数据类型
    type:mongoose.Schema.Types.ObjectId,
    // 设置classId所有关联的集合模型
    ref:"classModel"
  },
  img:String
})

mongoose.model("studentModel",student,"studentsinfor");