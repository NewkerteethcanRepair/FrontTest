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
const {
    searchAll3
} = require("../dao/studentsDao")


module.exports.deleteOne2 = async function (deleteid) {

    const data = await deleteOne3(deleteid)
    if (data.deletedCount == 1) {
        return (true)
    } else {
        return (false)
    }
}
module.exports.addAll2 = async function (pagedata) {
    // deleteOne3(deleteid)
    console.log(pagedata.searchkey);
    
   
    // console.log(data);   
 
    if (pagedata.searchkey==-1) {
        const data = await addAll3(pagedata);
        console.log(data);
        
        if (data.length !==0) {
            return data
        } else {
            return false
        }
    }else{
        const data1 = await searchAll3(pagedata);
        console.log(data1);
        
        if (data1.length !==0) {
            return data1
        } else {
            return false
        }
    }

    // if(pagedata.searchkey=="-1"){






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
    console.log(studentdata);
    console.log(studentdata.ok);
    
    if (studentdata.ok == 1) {
        return true;
    } else {

        return false;
    }
}
module.exports.total2 = async function () {


    const total = await total3()
    // console.log(studentdata);

    if (total != null) {
        return total;
    } else {

        return false;
    }
}
module.exports.search2 = async function (data) {


    const total = await search3(data)
    // console.log(studentdata);

    if (total.length > 0) {
        return total;
    } else {

        return false;
    }
}