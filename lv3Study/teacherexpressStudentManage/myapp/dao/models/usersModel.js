// 数据集合的相关配置
const mongoose = require('mongoose');
// 1. 定义数据集合的结构
const usersSchema = new mongoose.Schema({
  username: String,
  password: String
});
// 2. 定义数据模型（后续都是通过数据模型去操作数据库）
// 参数一：当前数据模型的名称
// 参数二：对应的数据结构的名称
// 参数三：数据库中所对应的数据集合的名称
mongoose.model('usersModel', usersSchema, 'users');