import { handleActions } from "redux-actions";
import { GET_STUDENTS_BY_PAGE } from "./actions-type.js";

const initStudentsData = {
    currentPage: 1,
    pageSize: 3,
    totol: 0,
    pages: 0,
    studentsData: []
}

export const StudentDataTeacher = handleActions({
    [GET_STUDENTS_BY_PAGE]: (state, { payload }) => payload
}, initStudentsData);