var express = require('express');
var router = express.Router();
/* GET users listing. */
const {addClass2} = require("../service/classServices");
const {getClass2} = require("../service/classServices");
router.post('/addclass', async function (req, res, next) {
    const data=req.body;
    const addclassdata =await addClass2(data);
    console.log(addclassdata);
    
   if(addclassdata==true){
       res.send("添加成功")
   }
   else{
       res.send("添加失败")
   }
    //   res.send('respond with a resource');

});
router.post('/getAll', async function (req, res, next) {
  
    const getclassdata =await getClass2();
    if(getclassdata!=null){
        res.send(getclassdata)
    }
});
module.exports = router;