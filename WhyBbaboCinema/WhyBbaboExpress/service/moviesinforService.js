const { getall3,update3} = require("../dao/MoviesInforDao");
module.exports.getall2 = async (movies) => {
    console.log(movies);
    
    const data=await getall3(movies);
    if(data){

      return data
    }
    else{
      return false
    }
  
  
};