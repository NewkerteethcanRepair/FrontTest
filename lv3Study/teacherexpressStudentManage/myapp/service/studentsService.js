const { 
    getStudents, deleteOne, addStudents, getStudentsById, updateStudents, searchStudents, getStudentsByPage
} = require('../dao/studenstDao');

module.exports.getStudents = async params => {
    // 判断参数中的 searchValue 是否有值
    if (params.searchValue) {
        // searchValue 有值，就表示当前的请求是在做“搜索学生”
        return await searchStudents(params);
    } else if (params.pageSize) {
        // 当前端传递的参数中有 pageSize 属性，则表示当前是在做分页请求
        return await getStudentsByPage(params);
    } else {
        // searchValue 没有值，就表示当前的请求是在做“获取所有学生”
        return await getStudents();
    }
}

module.exports.deleteOne = async _id => {
    const data = await deleteOne(_id);
    if (data.deletedCount === 1) {
        return true;
    }
    return false;
}

module.exports.addStudents = async student => {
    const data = await addStudents(student);
    if (data._id) {
        return true;
    }
    return false;
}

module.exports.getStudentsById = async _id => {
    return await getStudentsById(_id);
}


module.exports.updateStudents = async student => {
    const data = await updateStudents(student);
    if (data.ok === 1) {
        return true;
    }
    return false;
}

