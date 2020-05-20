const mongoose = require('mongoose');

const usersModel = mongoose.model('usersModel');

// 判断登录是否成功
module.exports.login = async function (user) {
    const data = await usersModel.find(user);
    return data;
}

module.exports.register = async function (user) {
    return await usersModel.create(user);
}



