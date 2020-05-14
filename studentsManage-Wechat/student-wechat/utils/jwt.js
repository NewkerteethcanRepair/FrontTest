// 配置 token 验证
const expressJWT=require("express-jwt");
const  jwtAuth=expressJWT({
    secret:"mytoken",
    credentialsRequired:false

}).unless({
    path:['/admin/login','admin/add']
})
module.exports=jwtAuth;