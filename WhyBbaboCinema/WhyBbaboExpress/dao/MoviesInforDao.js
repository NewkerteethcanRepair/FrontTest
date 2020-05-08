const mongoose = require('mongoose');


//获取列表
module.exports.getall3 = async ({pageSize,current}) => {
    // console.log(pageSize,current);
    
    // const data3= await mongoose.model('VipUserModel').find(user);
    // const total=await mongoose.model('MoviesInforSchemaModel')
    // .find().countDocuments();
    // countDocuments
    const data3= await mongoose.model('MoviesInforSchemaModel').find()
    .limit(pageSize-0)
    .skip((current-1)*(pageSize-0));
    // console.log('====================================');
    // console.log(data3);
    // console.log('====================================');
    return data3
}