//第一层
var express = require('express');
var router = express.Router();
// const mongoose=require("mongoose");
// const student= new mongoose.Schema({
//   id:String,
//   name:String,
//   age:String,
//   sex:String,
// })


// mongoose.model("studentModel",student,"studentsinfor");
/* GET users listing. */

const {
  deleteOne2
} = require("../service/studentsService")
const {
  addAll2
} = require("../service/studentsService")
const {
  addlist2
} = require("../service/studentsService")
const {
  update2
} = require("../service/studentsService")
const {
  total2
} = require("../service/studentsService")
const {
  search2
} = require("../service/studentsService")


// 是否登录

// 退出登录
router.get('/logout', (req, res) => {
  req.session.destroy(function () {
    // req.session.loginUser = null;
    res.clearCookie('currentUser');
    res.send(true);
  })
});

router.get('/search', async function (req, res, next) {
  const data = req.query
  // console.log(data);

  const getdata = await search2(data)
  res.send(getdata)

})
// router.post('/students', async function (req, res, next) {
//   const pagedata = req.body;
//   // console.log(pagedata);

//   const data = await addAll2(pagedata);
//   res.send(data)
// });
router.get('/students', async function (req, res, next) {
  const pagedata = req.query;
  console.log(pagedata);

  const data = await addAll2(pagedata);
  
  res.send(data)
});

router.delete('/', async function (req, res, next) {
  // res.send('respond with a resource');
  // 获取前端发送到后端的数据
  // post: req.body
  // get:req.query
  let deleteid = req.body;
  // console.log(deleteid);
  const data = await deleteOne2(deleteid);

  if (data == true) {

    res.send(data)
  } else {
    res.send(false)
  }


});
router.post('/addlist', async function (req, res, next) {
  data = req.body;
  // console.log(data);

  const newdata = await addlist2(data);
  if (newdata == true) {
    res.send(newdata)
  } else {
    res.send(false)
  }


});
router.post('/updatedata', async function (req, res, next) {
  data = req.body;
  // console.log(req.body);
  // console.log(req.body);

  const newdata = await update2(data);
  if (newdata ) {
    res.send(newdata)
  } else {
    res.send(false)
  }

});
router.get('/total', async function (req, res, next) {

  const data = await total2();
  // post: req.body
  // get:req.query
  res.send(data)
});
module.exports = router;