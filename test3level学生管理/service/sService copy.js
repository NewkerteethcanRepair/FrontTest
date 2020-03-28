const {
    deleteOne3
} = require("../dao/studentsDao")
const {
    addAll3
} = require("../dao/studentsDao")
const {
    addlist3
} = require("../dao/studentsDao")
const {
    update3
} = require("../dao/studentsDao")
const {
    total3
} = require("../dao/studentsDao")
const {
    search3
} = require("../dao/studentsDao")


module.exports.deleteOne2 = async function (deleteid) {
 
    const data = await deleteOne3(deleteid)
    if (data.deletedCount == 1) {
        return (true)
    } else {
        return (false)
    }
}
module.exports.addAll2 = function (req, res,pagedata) {
    // deleteOne3(deleteid)
    addAll3(req, res,pagedata);
}
//新增
module.exports.addlist2 = async function (data) {
    const studentdata = await addlist3(data)
    // console.log(studentdata);
    
    if (studentdata != null) {
        return true
    };
    return false
}
// 更新
module.exports.update2 = async function (data) {
    // console.log(data);
    
    const studentdata = await update3(data)
    // console.log(studentdata);
    
    if (studentdata.ok == 1) {
        return true;
    }
    else{

        return false;
    }
}
module.exports.total2 = async function () {
   
    
    const total = await total3()
    // console.log(studentdata);
    
    if (total != null) {
        return total;
    }
    else{

        return false;
    }
}
module.exports.search2 = async function (data) {
   
    
    const total = await search3(data)
    // console.log(studentdata);
    
    if (total.length>0) {
        return total;
    }
    else{

        return false;
    }
}