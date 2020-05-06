const { getall3,add3} = require("../dao/OrderDao");
module.exports.getall2 = async (movies) => {
 
    const data=await getall3(movies);
    if(data){

      return data
    }
    else{
      return false
    }
  
  
};
module.exports.add2 = async (user) => {
    const data = await add3(user);
    if (data!=null) {
      return data;
    }
  };