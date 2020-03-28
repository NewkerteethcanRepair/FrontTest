const mongoose = require("mongoose");
module.exports.addClass3 = async function (data) {

    const returndata =await mongoose.model("classModel").create(data);
    return returndata;
}

module.exports.getClass3 = async function () {

    const returndata =await mongoose.model("classModel").find((err, data) => {
        //   console.log(data);
        //   if (data.length == 0) {
        //     res.send("找不到啊")

        //   } else {
        //     res.send(data)
        //     // send 才找的到
        //   }
        //   console.log(err);

    });
    return returndata;
}