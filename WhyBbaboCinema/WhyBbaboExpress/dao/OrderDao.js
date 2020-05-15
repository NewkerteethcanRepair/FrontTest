const mongoose = require('mongoose');


//获取列表
module.exports.getall3 = async (data) => {
    const data3= await mongoose.model('OrderModel')
        .find(data)
        .populate('MoviesInforId')
        .populate('VipUserId')
        .populate("CinemaId");
    console.log('====================================');
    console.log(data3);
    console.log('====================================');
    return data3;
}
module.exports.add3 = async (data) => {
    const data3 = await mongoose.model('OrderModel').create(data);
    console.log(data3);
    
    return data3
    
}