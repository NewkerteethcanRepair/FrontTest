const mongoose = require('mongoose');


//获取列表
module.exports.getall3 = async ({pageSize,current}) => {
    // const data3= await mongoose.model('VipUserModel').find(user);
    const data3= await mongoose.model('MoviesInforSchemaModel').find()
    // .limit(pageSize-0)
    // .skip((current-1)*pagesize);
    // console.log('====================================');
    console.log(data3);
    // console.log('====================================');
    return data3
}