var express = require('express');
var router = express.Router();
const {getall2,add2}=require("../service/vipuserService")
/* GET home page. */
router.post('/getall',async function(req, res, next) {
//   res.render('index', { title: 'Express' });
    const data=await getall2(req.body);
    res.send(data)
});


// 新增
router.post('/add',async function(req, res, next) {
    //   res.render('index', { title: 'Express' });
        const data=await add2(req.body);
        res.send(data)
    });

module.exports = router;
