import {ADDTODOLIST} from "./actions-type";
import {DONETOGGLE} from "./actions-type";
import {FILTER} from "./actions-type";

// 去创建一个reduxactions
import {createAction} from "redux-actions";



// 暴露这个创建的createActiuons 行为“



export const addto=createAction(ADDTODOLIST)

export const donetoggle=createAction(DONETOGGLE)

export const filterdata=createAction(FILTER)
