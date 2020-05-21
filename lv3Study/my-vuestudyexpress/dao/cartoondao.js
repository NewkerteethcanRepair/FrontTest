const mongoose = require("mongoose"); //用mongoose的方法了
// 第三层：持久层
module.exports.getall3 = async function (resdata) {

  console.log(resdata);
  
 const data3 = await mongoose.model("cartoonModel").find(resdata);
//  console.log(data3);
 
 return data3;

}
module.exports.add3 = async function (resdata) {

  
    const data3 = await mongoose.model("cartoonModel").create(resdata);
   //  console.log(data3);
    
    return data3;
   
}
module.exports.delete3 = async function (resdata) {

  
    const data3 = await mongoose.model("cartoonModel").deleteOne(resdata);
   //  console.log(data3);
    
    return data3;
   
}
// _id:this.ruleForm._id,
// name: this.ruleForm.name,
// types: this.ruleForm.options,
// date: this.ruleForm.valuedate,
// value: this.ruleForm.valuescore,
// time: this.ruleForm.time,
// imgs: this.dialogImageUrl
// { _id,...rest}
module.exports.update3 = async function ({ _id,name,types,date,value,time,imgs}) {

  
    const data3 = await mongoose.model("cartoonModel").updateOne({_id},{name,types,date,value,time,imgs});
   //  console.log(data3);
    
    return data3;
   
}