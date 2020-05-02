const { getall3,add3} = require("../dao/wbCinemaDao");
module.exports.getall2 = async (user) => {
 
    const data=await getall3(user);
    if(data){

      return data
    }
    else{
      return false
    }
  
  
};