const mongoose = require('mongoose');


//获取列表
module.exports.getall3 = async (reqdata) => {
    // console.log(pageSize,current);
    
    // const data3= await mongoose.model('VipUserModel').find(user);
    // const total=await mongoose.model('MoviesInforSchemaModel')
    // .find().countDocuments();
    // countDocuments
    const data3= await mongoose.model('adminModel').find(reqdata)
    // .limit(pageSize-0)
    // .skip((current-1)*(pageSize-0));
    // console.log('====================================');
    // console.log(data3);
    // console.log('====================================');
   
    // const total1=await mongoose.model('studentModel').countDocuments();

    // console.log(data3);
    
    return data3

}

module.exports.add3 = async (resdata) => {

    const data3=await mongoose.model("adminModel").create(resdata)
    return data3

}
module.exports.login3 = async (resdata) => {

    const data3=await mongoose.model("adminModel").find(resdata)
    return data3

}