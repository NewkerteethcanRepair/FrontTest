const { rendering,addData,delData,modificationData,inquireData,pageData } = require('../dao/studentDao');

// 数据渲染
module.exports.rendering = async (stu) => {
    if(stu.val){
        // 搜索查询
        return await inquireData({type:stu.genre,val:stu.val});
    }else if(stu.pageSize){
        // 请求分页数据
        return await pageData({currentPage:stu.currentPage,pageSize:stu.pageSize});
    } else{
        return await rendering();
    }
}

// 新增数据
module.exports.addData = async (stu) => {
    return await addData(stu);
}
// 删除数据
module.exports.delData = async (stu_id) => {
    return await delData(stu_id);
}
// 修改数据
module.exports.modificationData = async (stu) => {
    return await modificationData(stu);
}