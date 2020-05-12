let mongoose = require('mongoose');
let classesModel = mongoose.model('classes');

// 新增班级
module.exports.addClasses = async function(name){
    return await classesModel.create(name);
}
// 获取班级
module.exports.getClasses = async function(){
    return await classesModel.find();
}