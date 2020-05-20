// 连接数据库
const mongoose = require('mongoose');
// 设置目标数据库的地址(web02是要连接的数据库名称)
const dbURI = 'mongodb://localhost/web02';
// 连接数据库
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// 数据库连接成功后触发的方法
mongoose.connection.on('connected', function () {
  console.log('数据库连接成功：' + dbURI);
});


require('./models/usersModel');
require('./models/studentsModel');
require('./models/classesModel');