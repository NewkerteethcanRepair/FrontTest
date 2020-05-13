const { getall3, add3, delete3, login3 } = require("../dao/admindao");
const bcryptjs = require("bcryptjs");
module.exports.getall2 = async (resdata) => {
  console.log(resdata);

  // const bcryptjsdata= bcryptjs.compareSync(resdata.userphone,);
  // console.log(bcryptjsdata);

  const data = await getall3(resdata);
  // console.log(data);
  // bcryptjs.compareSync(resdata.userphone,data[0]);
  // console.log( bcryptjs.compareSync(resdata.userphone,data[0]));
  // bcryptjs.compareSync(resdata.userphone,data[0]);
  console.log(data);

  if (data.length > 0) {
    return data;
  } else {
    return false;
  }
};
module.exports.add2 = async (resdata) => {
  const data = await add3(resdata);
  if (data != null) {
    return data;
  }
};
module.exports.delete2 = async (resdata) => {
  const data = await delete3(resdata);
  if (data != null) {
    return data;
  }
};
module.exports.login2 = async (resdata) => {
  const data = await login3({ userphone: resdata.userphone });
//   console.log(data);

  if (data.length > 0) {
    // console.log(
    //   bcryptjs.compareSync(resdata.userpassword, data[0].userpassword)
    // );

    // return 
    if(bcryptjs.compareSync(resdata.userpassword, data[0].userpassword)){
        return data
    }
    else{
        return false
    }
    // return data;
  } 
  else {
    return false;
  }
};
