const {addClass3}=require("../dao/classDao")
const {getClass3}=require("../dao/classDao")
// module.exports.addlist2 = async function (data) 
module.exports.addClass2= async function(data){
    const adddata=await addClass3(data)
    
    if(adddata!=null){

        return  true;
    }
    else{
        return false;
    }
}
module.exports.getClass2= async function(){
    const getdata=await getClass3()
    return getdata;
    // if(getdata!=null){

    //     return  true;
    // }
    // else{
    //     return false;
    // }
}