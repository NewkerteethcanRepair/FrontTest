var express = require('express');
var router = express.Router();

const {
    getStudents, deleteOne, addStudents, getStudentsById, updateStudents
} = require('../service/studentsService');

// 获取学生 搜索学生
router.get('/getStudents', async function (req, res, next) {
    res.send(await getStudents(req.query));
});

// 通过 _id 删除学生
router.post('/deleteOne', async function (req, res, next) {
    res.send(await deleteOne(req.body));
});

// 新增学生
router.post('/addStudents', async function (req, res, next) {
    res.send(await addStudents(req.body));
});

// 通过 _id 获取一个学生数据
router.get('/getStudentsById', async function (req, res, next) {
    res.send(await getStudentsById(req.query));
});

router.post('/updateStudents', async function (req, res, next) {
    res.send(await updateStudents(req.body));
});



module.exports = router;
