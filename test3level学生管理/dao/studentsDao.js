const mongoose = require("mongoose");
//提供回调
module.exports.addAll3 =async function (pagedata) {
  // pageData.searchkey=name;
  // pageData.searchvalue=value;
 
  
 const alldata= mongoose.model("studentModel").find().populate("classId").limit(pagedata.pageSize-0).skip((pagedata.currentPage-1)*pagedata.pageSize)
//  const alldata= mongoose.model("studentModel").find().populate("classId");
  
  console.log(alldata);
  

return alldata;
  
}
module.exports.searchAll3 =async function (pagedata) {
  // pageData.searchkey=name;
  // pageData.searchvalue=value;
  // const a = await mongoose.model("studentModel").find({'i'  : {$regex:`${data[i]}`}}).populate("classId")
  
 const alldata= mongoose.model("studentModel").find({[pagedata.searchkey]:{$regex:`${pagedata.searchvalue}`}}).populate("classId").limit(pagedata.pageSize-0).skip((pagedata.currentPage-1)*pagedata.pageSize)
  
  

return alldata;
  
}

module.exports.deleteOne3 =async function (deleteid) {


  //  mongoose.model("studentModel").deleteOne(deleteid,(err,data)=>{
  //     // console.log(data);
  //     // console.log(data);
  //     //  deletedCount

  //     //   

  //  });
const data=await mongoose.model("studentModel").deleteOne(deleteid)
return data;

}
// 新增
module.exports.addlist3 = async function (data) {
  // console.log(data);
  
  const studentdata = await mongoose.model("studentModel").create(data);
  return studentdata;
  
}
module.exports.update3 = async function (data) {
  // console.log(data);
  
  const studentdata = await mongoose.model("studentModel").updateOne({"_id":data._id},{"name":data.name,"age":data.age,"sex":data.sex,"classId":data.classId})
 
  
  return studentdata;
  // const data=await mongoose.model("studentModel").deleteOne(deleteid);
  // return data;
}
module.exports.total3 = async function () {
  // console.log(data);
  
 const a = await mongoose.model("studentModel").countDocuments();
 return `${a}`;
  // const data=await mongoose.model("studentModel").deleteOne(deleteid);
  // return data;
}
module.exports.search3 = async function (data) {
  // console.log(data);
  console.log(data);
  
  for(let i in data){
    if(data[i]==""){
    const  a = await mongoose.model("studentModel").find().populate("classId")
    return a;
    }else{
    const a = await mongoose.model("studentModel").find(data).populate("classId")
    return a;
    }
    // const a = await mongoose.model("studentModel").find({'i'  : {$regex:`${data[i]}`}}).populate("classId")
   
  
  }
  // const data=await mongoose.model("studentModel").deleteOne(deleteid);
  // return data;
}