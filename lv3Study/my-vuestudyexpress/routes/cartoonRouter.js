var express = require("express");
const fs = require("fs");
const { uploadFiles, moveFiles, removeFiles } = require("../utils/uploadFiles");
var router = express.Router();
const {
  getall2,
  add2,
  delete2,
  update2,
} = require("../service/cartoonService");
/* GET users listing. */
router.get("/getall", async function (req, res, next) {
  const data = await getall2(req.query);
  console.log(23123,req.query);
  
  res.send(data);
});
router.get("/add", async function (req, res, next) {
  const { imgs } = req.query;
  // console.log(imgs);
  
  if(imgs){

    moveFiles({
      fromPath: "./public/temp",
      toPath: "./public/files",
      filename: imgs,
    });
    // const data = await add2(req.query);
  }
  else{
    req.query.imgs="defalut.jpg";
  }
  const data = await add2(req.query);

  if (data) {
    if(imgs){

      removeFiles("./public/temp");
    }
  }
  res.send(data);
});
router.get("/delete", async function (req, res, next) {
  const data = await delete2(req.query);
  res.send(data);
});
router.get("/update", async function (req, res, next) {
  const { imgs } = req.query;

  const data = await update2(req.query);

  if (data) {
    // console.log(data);

    fs.exists("./public/temp", function (exists) {
      console.log(exists ? "存在" : "没有创建");
      if (exists) {
        moveFiles({
          fromPath: "./public/temp",
          toPath: "./public/files",
          filename: imgs,
        });
        removeFiles("./public/temp");
      } else {
      }
    });
  }
  res.send(data);
});

// 上传

// const { uploadFiles } = require("../utils/uploadFiles");

// 上传
const images = uploadFiles({
  path: "./public/temp",
  key: "file",
});
router.post("/uploadImages", async function (req, res, next) {
  // res.send(req.files[0].filename);
  images(req, res, function (err) {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        res.send({ success: false, msg: "文件过大" });
      }
    } else {
      res.send({ success: true, filename: req.files[0].filename });
    }
  });
});
router.post("/cacheImages", images, async function (req, res, next) {
  res.send(req.files[0].filename);
});

router.post("/deleteImages",async function (req, res, next) {
  // res.send(req.files[0].filename);
  // console.log("imgs",req.imgs);
  const { imgs } = req.body;
  console.log("img",imgs);
  
  if(imgs&&imgs!="defalut.jpg"){

    fs.unlinkSync("public/files/" +imgs, (err) => {
     
     if(err){

       console.log(err);
       res.send(err)
     }
     else{

       res.send("删除成功")
     }
      
    });
  
  }
});

// router.post("/upload", function (req, res, next) {
//   const form = new multiparty.Form();
//   // 设置编码字符集
//   form.encoding = "utf-8";
//   // 文件储存路径
//   form.uploadDir = "./public/files";
//   // 设置文件大小限制(2m)
//   form.maxFilesSize = 10 * 1024 * 1024;
//   // 解析请求
//   form.parse(req, function (err, fields, files) {
//     console.log(files);

//     res.send(files);
//   });
// });

module.exports = router;
