var express = require('express');
var router = express.Router();
// let crypto =require("c")
const bcryptjs =require("bcryptjs");
const jwt=require("jsonwebtoken");
const {getall2,add2,delete2,login2}=require("../service/adminService")
/* GET users listing. */
router.get('/getall', async function(req, res, next) {
  // req.query;

  const data= await getall2(req.query)
  // console.log('====================================');
  console.log(data);
  // console.log('====================================');
  res.send(data);
});
router.get('/login', async function(req, res, next) {
    // req.query;
  
    const data= await login2(req.query)
    // console.log('====================================');
    console.log(data);
   
    // console.log('====================================');
    if(data){
        const token=jwt.sign({_id:data[0]._id},"mytoken",{expiresIn:30})
        res.send({success:true,token});
    }
    else{
        res.send({success:false});
    }
  });
router.get('/add', async function(req, res, next) {
  // req.query;
  const userpassword=bcryptjs.hashSync(req.query.userpassword,10);
  const userphone=req.query.userphone;

  const data= await add2({userphone,userpassword})
  res.send(data);
});

router.get('/delete', async function(req, res, next) {
  // req.query;
  const data= await delete2(req.query)
  res.send(data);
});




module.exports = router;
