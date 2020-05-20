var express = require('express');
var router = express.Router();
const { uploadFiles, moveFiles, removeFiles } = require('../utils/uploadFiles');

const {
    getStudents, deleteOne, addStudents, getStudentsById, updateStudents
} = require('../service/studentsService');

const images = uploadFiles({
    path: './public/temp',   // 设置上传成功后的图片存储路径
    key: 'file',   // key 的值与前端  formData.append('file', files[0]); 中的 'file' 保持一致
    fileSize: 500
});

// 图片上传
router.post('/uploadImages', async function (req, res, next) {

    images(req, res, function (err) {
        if (err) {
            console.log(err.code);
            if (err.code === 'LIMIT_FILE_SIZE') {
                res.send({ success: false, msg: '文件过大' });
            }
        } else {
            // console.log(req.files);
            res.send({ success: true, filename: req.files.map(item => item.filename) });
        }

    });

})

// 获取学生 搜索学生 分页获取学生
router.get('/getStudents', async function (req, res, next) {
    res.send(await getStudents(req.query));
});

// 通过 _id 获取一个学生数据
router.get('/:_id', async function (req, res, next) {
    res.send(await getStudentsById(req.params));
});

// 通过 _id 删除学生
router.delete('/', async function (req, res, next) {
    res.send(await deleteOne(req.body));
});

// 新增学生
router.post('/addStudents', async function (req, res, next) {
    const { imagePath } = req.body;
    // 将图片路径进行拆分，拿到图片名称
    if (imagePath) {
        const filename = imagePath.split('/').pop();
        // 将 temp 中临时文件移动到 images 中做永久保存
        moveFiles({
            fromPath: './public/temp',
            toPath: './public/images',
            filename
        });
        const data = await addStudents({ ...req.body, imagePath: `./images/${filename}` });
        if (data) {
            removeFiles("./public/temp");
        }
        res.send(data);

    } else {
        const data = await addStudents(req.body);
        res.send(data);
    }
});


router.post('/updateStudents', async function (req, res, next) {
    res.send(await updateStudents(req.body));
});



module.exports = router;
