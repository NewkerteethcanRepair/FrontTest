const {getall3,add3,delete3,update3,search3,getupdateall3} = require('../dao/cartoondao');
const fs = require('fs');
module.exports.getall2 = async function ({current,pageSize,searchType,searchValue,_id}) {
    if(searchValue){
        const data2 = await search3({current,pageSize,searchType,searchValue,_id})
        if (data2 !="") {
            return data2
        } else {
            return false
        }
    }
    else{
        if(current){
            const data2 = await getall3({current,pageSize,_id})
            if (data2 !="") {
                return data2
            } else {
                return false
            }

        }
        else{
            const data2 = await getupdateall3({_id})
            if (data2 !="") {
                return data2
            } else {
                return false
            }

        }
        
        
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
    console.log('====================================');
    console.log(reqdata.imgs);
    console.log('====================================');
    if (data2 !="") {
        if(reqdata.imgs!="defalut.jpg"&&reqdata.imgs!=""){
            

            fs.unlinkSync("public/files/"+reqdata.imgs, err => {
                if (err) console.log(err);
            });
            
        }
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