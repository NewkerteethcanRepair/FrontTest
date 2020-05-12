const { getall3,add3,delete3} = require("../dao/studentsdao");
module.exports.getall2 = async (resdata) => {
 
    const data=await getall3(resdata);
    // console.log(data);
    
    if(data){

      return data
    }
    else{
      return false
    }
  
  
};
module.exports.add2 = async (resdata) => {
    const data = await add3(resdata);
    if (data!=null) {
      return data;
    }
  };
module.exports.delete2 = async (resdata) => {
    const data = await delete3(resdata);
    if (data!=null) {
      return data;
    }
  };