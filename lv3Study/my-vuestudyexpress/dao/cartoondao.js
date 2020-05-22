const mongoose = require("mongoose"); //用mongoose的方法了
// 第三层：持久层
module.exports.getall3 = async function ({ current, pageSize }) {
  //   console.log();
  // console.log(_id);

  const data3 = await mongoose
    .model("cartoonModel")
    .find()
    .limit(pageSize - 0)
    .skip((current - 1) * pageSize);

  const count = await mongoose.model("cartoonModel").find().countDocuments();
  //  console.log(data3);

  return { data3, count };
};

module.exports.getupdateall3 = async function ({ _id }) {
    const data3 = await mongoose
    .model("cartoonModel")
    .find({_id})

    return {data3}
   

};

module.exports.search3 = async function ({
  current,
  pageSize,
  searchType,
  searchValue,
}) {
  //   console.log();

  const data3 = await mongoose
    .model("cartoonModel")
    .find({ [searchType]: { $regex: searchValue, $options: "$i" } })
    .limit(pageSize - 0)
    .skip((current - 1) * pageSize);
  const count = await mongoose
    .model("cartoonModel")
    .find({ [searchType]: { $regex: searchValue, $options: "$i" } })
    .countDocuments();
  //  console.log(data3);

  return { data3, count };
};
module.exports.add3 = async function (resdata) {
  const data3 = await mongoose.model("cartoonModel").create(resdata);
  //  console.log(data3);

  return data3;
};
module.exports.delete3 = async function (resdata) {
  const data3 = await mongoose.model("cartoonModel").deleteOne(resdata);
  //  console.log(data3);

  return data3;
};
// _id:this.ruleForm._id,
// name: this.ruleForm.name,
// types: this.ruleForm.options,
// date: this.ruleForm.valuedate,
// value: this.ruleForm.valuescore,
// time: this.ruleForm.time,
// imgs: this.dialogImageUrl
// { _id,...rest}
module.exports.update3 = async function ({
  _id,
  name,
  types,
  date,
  value,
  time,
  imgs,
}) {
  const data3 = await mongoose
    .model("cartoonModel")
    .updateOne({ _id }, { name, types, date, value, time, imgs });
  //  console.log(data3);

  return data3;
};
