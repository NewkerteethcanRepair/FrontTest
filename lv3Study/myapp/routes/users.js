var express = require('express');
var router = express.Router();
const { login,register,verify} = require('../service/userService.js');
let bcryptjs = require('bcryptjs');


router.get('/userxixi', function(req, res, next) {
  console.log("dadasda");
  
  res.send('嘻嘻嘻嘻');
  
});

// 登录
router.post('/login', async function (req, res, next) {
  //接收前端发送过来的数据
  const user = req.body;
  res.send(await login(user));
});
// 注册
router.post('/register', async function (req, res, next) {
  //接收前端发送过来的数据
  let {username,password} = req.body;
  let newpassword = bcryptjs.hashSync(password,10);
  res.send(await register({username,newpassword}));
});
// 注册验证
router.post('/verify', async function (req, res, next) {
  //接收前端发送过来的数据
  const user = req.body;
  res.send(await verify(user));
});
module.exports = router;