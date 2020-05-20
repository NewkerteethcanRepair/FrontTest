const mongoose = require('mongoose');
const studentsModel = mongoose.model('studentsModel');

// 获取所有学生
module.exports.getStudents = async () => {
    // 多表关联查询
    return await studentsModel.find().populate('classesId');
}

// 分页获取学生
module.exports.getStudentsByPage = async ({ pageSize, currentPage }) => {
    // 多表关联查询

    // 1. 获取当前集合的数据总条数
    const total = await studentsModel.countDocuments();
    // 2. 计算最大页数
    const pages = Math.ceil(total / pageSize);
    // 3. 判断当前页是否超出最大范围
    if (currentPage > pages) {
        currentPage = pages;
    }
    // 4. rows 获取的是分页的学生数据
    const rows = await studentsModel
        .find()
        .populate('classesId')
        .limit(pageSize - 0)   // limit(number) 用于设置请求数据的条数
        .skip((currentPage - 1) * pageSize);   // 用于设置跳过多少条数据
    return { total, rows, pages, pageSize, currentPage };
}


// 搜索（获取部分学生）
module.exports.searchStudents = async ({ searchType, searchValue, currentPage, pageSize }) => {
    // 精确查询
    // return await studentsModel.find({ [searchType]: searchValue });
    // 模糊查询
    // 满足搜索条件的数据总条数
    const total = (await studentsModel.find({ [searchType]: { $regex: searchValue, $options: '$i' } })).length;
    // 搜索到的分页学生数据
    const rows = await studentsModel
        .find({ [searchType]: { $regex: searchValue, $options: '$i' } })
        .populate('classesId')
        .limit(pageSize - 0)   // limit(number) 用于设置请求数据的条数
        .skip((currentPage - 1) * pageSize);   // 用于设置跳过多少条数据
    console.log(rows);
    return { total, rows };
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