const mongoose = require('mongoose');


//获取列表
module.exports.getall3 = async (user) => {
    // const data3= await mongoose.model('VipUserModel').find(user);
    const data3= await mongoose.model('MoviesInforSchemaModel').find(user);
    // console.log('====================================');
    // console.log(data3);
    // console.log('====================================');
    return data3
}