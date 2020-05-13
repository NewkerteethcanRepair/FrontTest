var express = require('express');
var router = express.Router();
const {rendering,addData,delData,modificationData} = require('../service/studentService');
const {uploadFiles}= require("../utils/uploadFiles")


// 上传
const images=uploadFiles({
    path:"./public/images",
    key:"file"
})
router.post('/uploadImages',images, async function (req, res, next) {

    res.send(req.files[0].filename);
    
});
router.post('/cacheImages',images, async function (req, res, next) {
    
    res.send(req.files[0].filename);
});


// 数据渲染
router.post('/rendering', async function (req, res, next) {
    res.send(await rendering(req.body));
});
// 新增数据
router.post('/addData', async function (req, res, next) {
    let stu = req.body;
    res.send(await addData(stu));
});
// 删除数据
router.post('/delData', async function (req, res, next) {
    let stu_id = req.body;
    res.send(await delData(stu_id));
});
// 修改数据
router.post('/modificationData', async function (req, res, next) {
    let stu = req.body;
    res.send(await modificationData(stu));
});
module.exports = router;