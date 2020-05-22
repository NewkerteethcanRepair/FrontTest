const mongoose = require("mongoose");
const cartoonSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "嘻嘻嘻",
  },
  imgs: {
    type: String,
    default: "defalut.jpg",
  },
//   星星评分
  value: {
    type: String,
    default: 3.9,
  },
  types: {
    type: String,
    default: "搞笑",
  },
  time: {
    type: String,
    default: 23,
  },
  date: {
    type: String,
    default: "2020-05-16",
  },
});
mongoose.model("cartoonModel", cartoonSchema, "cartoon");
