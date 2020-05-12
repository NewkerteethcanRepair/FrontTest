let {addClasses,getClasses} = require('../dao/classesDao');

// 新增班级
module.exports.addClasses = async function(name){
    let data = await addClasses(name);
    if(data._id){
        return true;
    }
    return false;
}

// 获取班级
module.exports.getClasses = async function(){
    return await getClasses();
}