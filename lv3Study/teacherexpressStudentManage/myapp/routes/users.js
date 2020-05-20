var express = require('express');
var router = express.Router();
const { getMd5 } = require('../utils/crypto');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { login, register } = require('../service/usersService');

// 设置前后端接口的二级路径

router.get('/isLogin', async function (req, res, next) {
  // 获取 token
  const token = req.get('Authorization');
  const { username } = jwt.verify(token.split(" ")[1], 'mytoken');
  res.send({ username: username });
})


// 登录
router.post('/login', async function (req, res, next) {
  // 接收前端发送过来的数据
  // const { username, password } = req.body;   // get：req.query
  // const newPassword = getMd5(password, 'asdasd');
  // const data = await login({ username, password: newPassword });
  // res.send(data);


  const { username, password } = req.body;
  const data = await login({ username, password });
  if (data) {
    // 进入 if，表示用户登录成功
    // 生成 token
    // sign 方法接收三个参数：
    // 参数一：对象，该对象为我们要保存到用户数据
    // 参数二：字符串，密钥字符串（可随意定义）
    // 参数三：对象，用于设置 token 的有效期 {expiresIn: 10 } 单位 秒
    const token = jwt.sign({ username: data.username }, 'mytoken', { expiresIn: 60 * 60 });
    res.send({ success: true, token });
  } else {
    res.send({ success: false });
  }
});

// 注册
router.post('/register', async function (req, res, next) {
  const { username, password } = req.body;
  // md5 加密
  // const newPassword = getMd5(password, 'asdasd');  // 123asdasd
  // bcrypt 加密
  const newPassword = bcryptjs.hashSync(password, 10);
  res.send(await register({ username, password: newPassword }));
});

// 验证用户名是否存在
router.post('/isExist', (req, res) => {
  const { username } = req.body;
  mongoose.model('usersModel').find({ username }, function (err, data) {
    if (data.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  })
})



module.exports = router;
