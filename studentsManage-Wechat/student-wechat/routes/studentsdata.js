var express = require('express');
var router = express.Router();

const {getall2,add2,delete2}=require("../service/studentService")
/* GET users listing. */
router.get('/getall', async function(req, res, next) {
  // req.query;

  const data= await getall2(req.query)
  // console.log('====================================');
  console.log(data);
  // console.log('====================================');
  res.send(data);
});
router.get('/add', async function(req, res, next) {
  // req.query;
  const data= await add2(req.query)
  res.send(data);
});

router.get('/delete', async function(req, res, next) {
  // req.query;
  const data= await delete2(req.query)
  res.send(data);
});




module.exports = router;
