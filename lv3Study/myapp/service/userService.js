const { login, register,verify } = require('../dao/userDao');
let bcryptjs = require('bcryptjs');
module.exports.login = async function (user) {
    let data = await login({username:user.username});
    if (data.length > 0) {
        // 前端传入的密码与数据库拿回的加密密码比对，返回布尔值
        return bcryptjs.compareSync(user.password,data[0].password);
    } else {
        return false;
    }
}

module.exports.register = async function (user) {
    return await register({username:user.username,password:user.newpassword});
};

module.exports.verify = async function (user){
    let data = await verify(user);
    if(data.length > 0){
        return true;
    }
    return false;
};