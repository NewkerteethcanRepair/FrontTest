// 配置 token 验证
const expressJWT = require('express-jwt');

const jwtAuth = expressJWT({ 
    secret: 'mytoken', 
    credentialsRequired: false 
}).unless({
    path: ['/users/login', '/users/register']
})

module.exports = jwtAuth;