const mongoose = require('mongoose');


//获取列表
module.exports.getall3 = async (user) => {
    const data3= await mongoose.model('VipUserModel').find(user);
    // console.log('====================================');
    // console.log(data3);
    // console.log('====================================');
    return data3
}
module.exports.add3 = async (user) => {
    return await mongoose.model('VipUserModel').create(user);
    
}