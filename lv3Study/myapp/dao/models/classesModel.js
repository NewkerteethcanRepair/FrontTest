const mongoose = require('mongoose');

// 定义数据结构
const classesSchema = new mongoose.Schema({
  name: String
});
mongoose.model('classes', classesSchema,'classes');