const mongoose = require('mongoose');
const studentsModel = mongoose.model('studentsModel');

// 获取所有学生
module.exports.getStudents = async () => {
    return await studentsModel.find();
}

// 搜索（获取部分学生）
module.exports.searchStudents = async ({ searchType, searchValue }) => {
    // 精确查询
    // return await studentsModel.find({ [searchType]: searchValue });
    // 模糊查询
    return await studentsModel.find({ [searchType]: { $regex: searchValue, $options: '$i' } });
}

module.exports.deleteOne = async _id => {
    return await studentsModel.deleteOne(_id);
}

module.exports.addStudents = async student => {
    return await studentsModel.create(student);
}

module.exports.getStudentsById = async _id => {
    return await studentsModel.find(_id);
}

module.exports.updateStudents = async ({ _id, name, gender, age }) => {
    return await studentsModel.updateOne({ _id }, { name, age, gender });
}