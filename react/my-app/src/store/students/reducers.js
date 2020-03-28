import { handleActions } from "redux-actions";
import { GETSTUDENTDATA } from "./actions.type";

const initstudentData = {
  currentPage: 1,
  pageSize: 3,
  studentData: []
};

export const pageData = handleActions(
  {
    [GETSTUDENTDATA]: (state, { payload }) => payload
  },
  initstudentData
);
