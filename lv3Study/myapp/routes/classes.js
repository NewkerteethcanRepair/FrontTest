var express = require('express');
var router = express.Router();
let {addClasses,getClasses} = require('../service/classesService');

// 新增班级
router.post('/addClasses', async function(req, res, next) {
    res.send(await addClasses(req.body));
});

// 获取班级数据
router.get('/getClasses', async function(req, res, next) {
    res.send(await getClasses());
});
module.exports = router;
