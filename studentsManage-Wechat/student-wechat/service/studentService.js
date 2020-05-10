const { getall3,add3} = require("../dao/studentsdao");
module.exports.getall2 = async (resdata) => {
 
    const data=await getall3(resdata);
    if(data){

      return data
    }
    else{
      return false
    }
  
  
};
module.exports.add2 = async (resdata) => {
    const data = await add3(usresdataer);
    if (data!=null) {
      return data;
    }
  };