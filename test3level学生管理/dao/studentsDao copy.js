// const mongoose = require("mongoose");
// //提供回调
// module.exports.addAll3 = function (req, res,pagedata) {
//   // pageData.searchkey=name;
//   // pageData.searchvalue=value;
 
  
  
  
//   if(pagedata.searchkey=="-1"){
    
//     mongoose.model("studentModel").find((err, data) => {
   
//       console.log(pagedata.searchkey);
//       // console.log(pagedata);
//       // console.log(data);
//       if (data.length == 0) {
//         res.send("找不到啊")
  
//       } else {
        
//         // data.push(`${a}`);
       
//         res.send(data)
//         // send 才找的到
        
//       }
//       // console.log(err);
  
//     }).populate("classId").limit(pagedata.pageSize-0).skip((pagedata.currentPage-1)*pagedata.pageSize)
  
// }
// else{
//   const searchdata={};
//   searchdata[pagedata.searchkey]=pagedata.searchvalue;
//   console.log(searchdata);
//    mongoose.model("studentModel").find(searchdata,(err, data) => {


//     // console.log(data);
//     if (data.length == 0) {
//       res.send("找不到啊")

//     } else {
      
//       // data.push(`${a}`);
     
//       res.send(data)
//       // send 才找的到
      
//     }
//     // console.log(err);

//   }).populate("classId").limit(pagedata.pageSize-0).skip((pagedata.currentPage-1)*pagedata.pageSize)
// }

  
// }

// module.exports.deleteOne3 =async function (deleteid) {


//   //  mongoose.model("studentModel").deleteOne(deleteid,(err,data)=>{
//   //     // console.log(data);
//   //     // console.log(data);
//   //     //  deletedCount

//   //     //   

//   //  });
// const data=await mongoose.model("studentModel").deleteOne(deleteid)
// return data;

// }
// // 新增
// module.exports.addlist3 = async function (data) {
//   // console.log(data);
  
//   const studentdata = await mongoose.model("studentModel").create(data);
//   return studentdata;
  
// }
// module.exports.update3 = async function (data) {
//   // console.log(data);
  
//   const studentdata = await mongoose.model("studentModel").updateOne({"_id":data._id},{"name":data.name,"age":data.age,"sex":data.sex,"classId":data.classId})
 
  
//   return studentdata;
//   // const data=await mongoose.model("studentModel").deleteOne(deleteid);
//   // return data;
// }
// module.exports.total3 = async function () {
//   // console.log(data);
  
//  const a = await mongoose.model("studentModel").countDocuments();
//  return `${a}`;
//   // const data=await mongoose.model("studentModel").deleteOne(deleteid);
//   // return data;
// }
// module.exports.search3 = async function (data) {
//   // console.log(data);
//   console.log(data);
//   let  a
//   for(let i in data){
//     if(data[i]==""){
//       a = await mongoose.model("studentModel").find().populate("classId")
//     }else{
//      a = await mongoose.model("studentModel").find(data).populate("classId")
//     }
//     // const a = await mongoose.model("studentModel").find({'i'  : {$regex:`${data[i]}`}}).populate("classId")
   
//     return a;
//   }
//   // const data=await mongoose.model("studentModel").deleteOne(deleteid);
//   // return data;
// }