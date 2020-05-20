const {getall3,add3,delete3,update3} = require('../dao/cartoondao');

module.exports.getall2 = async function (reqdata) {

    const data2 = await getall3(reqdata)
    if (data2 !="") {
        return data2
    } else {
        return false
    }
}
module.exports.add2 = async function (reqdata) {

  
    const data2 = await add3(reqdata)
    if (data2 !="") {
        return data2
    } else {
        return false
    }
   
}
module.exports.delete2 = async function (reqdata) {

  
    const data2 = await delete3(resdata)
    if (data2 !="") {
        return data2
    } else {
        return false
    }
   
}
module.exports.update2 = async function (reqdata) {

  
    const data2 = await update3(reqdata)
    if (data2 !="") {
        return data2
    } else {
        return false
    }
   
}