var express = require('express');
var router = express.Router();

const multiparty = require("multiparty");
const fs = require('fs');
const path = require('path');

router.post('/upload', function (req, res, next) {
    const form = new multiparty.Form();
    // 设置编码字符集
    form.encoding = "utf-8";
    // 文件储存路径
    form.uploadDir = "./public/files";
    // 设置文件大小限制(2m)
    form.maxFilesSize = 10 * 1024 * 1024;
    // 解析请求
    form.parse(req, function (err, fields, files) {
      
        res.send(files);
    });
});


router.get('/download', (req, res) => {
    const { fileName } = req.query;
    
    fs.readFile(path.join('./public/files', fileName), (err, data) => {
        if (err) {
            console.log("err", err);
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Disposition': 'attachment; filename=' + fileName
        });
        res.end(data);
    });
})

module.exports = router;
