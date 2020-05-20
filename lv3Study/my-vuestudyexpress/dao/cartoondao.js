const mongoose = require("mongoose"); //用mongoose的方法了
// 第三层：持久层
module.exports.getall3 = async function (resdata) {

  
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
module.exports.update3 = async function (resdata) {

  
    const data3 = await mongoose.model("cartoonModel").updateOne(resdata);
   //  console.log(data3);
    
    return data3;
   
}