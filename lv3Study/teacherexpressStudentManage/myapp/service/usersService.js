const { login, register } = require('../dao/usersDao');
const bcryptjs = require('bcryptjs');

module.exports.login = async function (user) {
    const data = await login({ username: user.username });
    if (data.length > 0) {
        // 验证密码
        const isValid = bcryptjs.compareSync(user.password, data[0].password);
        if(isValid) {
            return data[0];
        }
    }
    return false;
}

module.exports.register = async function (user) {
    const data = await register(user);
    if (data._id) {
        return true;
    }
    return false;
}

