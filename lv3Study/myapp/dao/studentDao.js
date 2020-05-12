const mongoose = require('mongoose');

let mongooseModel = mongoose.model('student');

// 数据渲染
module.exports.rendering = async () => {
    return await mongooseModel.find().populate('classesId');
}
// 分页数据
module.exports.pageData = async ({currentPage,pageSize}) => {
    let rows = await mongooseModel
    .find()
    .populate('classesId')
    .limit(pageSize - 0) // 请求数据条数
    .skip((currentPage-1)*pageSize); // 设置跳过多少条
    let total = await mongooseModel.countDocuments();
    return {rows,total};
}
// 新增数据
module.exports.addData = async (stu) => {
    return await mongooseModel.create(stu);
}
// 删除数据
module.exports.delData = async (stu_id) => {
    return await mongooseModel.deleteOne(stu_id);
}
// 修改数据
module.exports.modificationData = async ({_id,name,age,gender}) => {
    return await mongooseModel.updateOne({_id},{name,age,gender});
}
// 查询数据
module.exports.inquireData = async ({ type, val }) => {
    // 精确查询
    // return await mongooseModel.find({ [type]: val });
    // 模糊查询
    let data = await mongooseModel.find({ [type]: { $regex: val, $options: '$i' } }).populate('classesId');
    let total = await (await mongooseModel.find({ [type]: { $regex: val, $options: '$i' } }).populate('classesId')).length;
    return {rows:data,total};
}