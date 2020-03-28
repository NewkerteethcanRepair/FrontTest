var express = require('express');
var router = express.Router();
// const userdata = [{
//     phone: '123',
//     pwd: "123"
//   },
//   {
//     phone: '321',
//     pwd: "123"
//   },
// ]
const mongoose=require("mongoose");
const usersSchema= new mongoose.Schema({
  user:String,
  pwd:String
})

mongoose.model("usersModel",usersSchema,"users");

/* GET users listing. */
router.get('/login', async function (req, res, next) { //二级路径
  // 获取前端发送到后端的数据
  // post: req.body
  // get:req.query
  let getuserdata = req.query;
  // console.log(getuserdata);
 let data=await mongoose.model("usersModel").find(getuserdata);
       if(data.length!=0){
        req.session.regenerate(function () {
          req.session.loginUser = data[0].user;
          console.log(data[0].user);
          
          res.send(data)
        
      });
        //  console.log(data);
         
       }else{
         res.send("登录失败")
       }

  // if (loginsuccess) {
  //   res.send("登录成功")
  // } else {
  //   res.send("登录有错误")
  // }

  // res.send('respond with a resource');
});

router.get('/isLogin', (req, res) => {
  const user = req.session.loginUser;
  if (user) {
    res.send({
      isLogin: true,
      user
    });
  } else {
    res.send({
      isLogin: false
    });
  }
})


router.post('/register',async function (req, res, next) { //二级路径
  // 获取前端发送到后端的数据
  // post: req.body
  // get:req.query
  let getnewuserdata = req.body;
  // console.log(getnewuserdata);

  const registersuccess = await mongoose.model("usersModel").find({user:getnewuserdata.user})
  console.log(registersuccess);
  
  if (registersuccess.length==0) {
    const createone = await mongoose.model("usersModel").create(getnewuserdata)
    console.log(createone);
    
    res.send(true)
  } else {
    // userdata.push(getnewuserdata)
    // console.log(userdata);
    
    res.send("注册失败，用户名一样或存在其他问题")
  }

  // res.send('respond with a resource');
});

router.post('/checkuser', function (req, res, next) { //二级路径
  // 获取前端发送到后端的数据
  // post: req.body
  // get:req.query
  let getnewuserdata = req.body;
  console.log(getnewuserdata);

  const registersuccess = userdata.some((value, index) => {
    //  console.log(value.phone);
    if (value.phone == getnewuserdata.newuser) {
      // console.log(value.phone);

      return true;

    }
  })
 
  if (registersuccess) 
  {
   
    res.send("1")
  } else {
    
    res.send("0")
  }

  // res.send('respond with a resource');
});
module.exports = router;