const {getall3,add3,delete3,update3} = require('../dao/cartoondao');
const fs = require('fs');
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

    // console.log(reqdata);
    
    const data2 = await delete3(reqdata)
    if (data2 !="") {
        fs.unlink("public/files/"+reqdata.imgs, err => {
            if (err) console.log(err);
        });
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