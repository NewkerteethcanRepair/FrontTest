import {handleActions} from "redux-actions"
import {ADDTO} from "./actions-type"

const initlist=[
    { id: 0, text: 'HTML', done: false },
    { id: 1, text: 'CSS', done: true },
    { id: 2, text: 'JS', done: false }
];
export const getlist= handleActions({
    [ADDTO]:(state,action)=>[...state,{
        // id:3,
        // text:action.payload,
        // done:false,
    }]
},initlist)