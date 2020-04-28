// 第二层

const { getall3,add3} = require("../dao/VipUserDao");
module.exports.getall2 = async (user) => {
 
    const data=await getall3(user);
    if(data){

      return data
    }
    else{
      return false
    }
  
  
};

// const { add3 } = require("../dao/VipUserDao");
module.exports.add2 = async (user) => {
  const data = await add3(user);
  if (data) {
    return data;
  }
};
