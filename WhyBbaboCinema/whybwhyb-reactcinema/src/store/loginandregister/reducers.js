import { handleActions } from "redux-actions";
import { GET_VIPUSER } from "./actions-type";
// 初始数据
// init初始化
const initLoginuserdata = {
  VipUser: "",
};
//需要替换掉初始化数据 加入actions-types
// handleActions 第一参数
// 执行操作

export const vipData = handleActions(
  {
    [GET_VIPUSER]: (state, { payload }) => payload,
  },
  initLoginuserdata
);
