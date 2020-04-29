var express = require('express');
var router = express.Router();
const {getall2,update2}=require("../service/moviesinforService")
/* GET home page. */
router.post('/getall',async function(req, res, next) {
//   res.render('index', { title: 'Express' });
    const data=await getall2(req.body);
    res.send(data)
});


// 更新 主要用于 评论
router.post('/update',async function(req, res, next) {
    //   res.render('index', { title: 'Express' });
        const data=await update2(req.body);
        res.send(data)
    });

module.exports = router;
