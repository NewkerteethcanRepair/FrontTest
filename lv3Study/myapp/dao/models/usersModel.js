const mongoose = require('mongoose');

// 定义数据结构
const usersSchema = new mongoose.Schema({
  username: String,
  password: String
});
// 定义数据模型
//参数一:当前数据模型的名称
//参数二:对应的数据结构的名称
//参数三:数据库中所对应的数据集合的名称
mongoose.model('users', usersSchema);
// mongoose.model('usersModel',usersSchema,'users');