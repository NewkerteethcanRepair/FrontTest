// 用于配置服务端与数据库的连接
const mongoose = require("mongoose");
const dbURI = "mongodb://localhost/studentmanage-wechat";  // hello-world 是当前连接的数据库名称
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', function () {
    console.log("mongoose 成功连接 mongodb 数据库：" + dbURI);
})
require('./models/classmodel')
require('./models/studentsmodel')
// require('./models/VipUserModel')
// require('./models/wbCinemaModel')