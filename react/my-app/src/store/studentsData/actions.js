import { createAction } from "redux-actions";
import { GET_STUDENTS_BY_PAGE } from "./actions-type.js";

const getStudentsByPage = createAction(GET_STUDENTS_BY_PAGE);

export const getStudentsByPageAsync = ({ currentPage = 1, pageSize = 3 } = {}) => {
    return async (dispatch, getState) => {
        // fetch：ES6 新增的
        const pageData = await fetch(`/students?currentPage=${currentPage}&pageSize=${pageSize}`)
            .then(res => res.json());
        if (pageData) {
            dispatch(getStudentsByPage(pageData));
        }
    }
}

export const deleteByIdAsync = _id => {
    return async (dispatch, getState) => {
        const data = await fetch('/students', {
            method: 'DELETE',
            body: JSON.stringify({ _id }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json());
        if (data) {
            dispatch(getStudentsByPageAsync({
                currentPage: getState().pageData.currentPage,
                pageSize: getState().pageData.pageSize
            }))
        }
    }
}