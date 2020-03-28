import {createAction}  from "redux-actions";
import {INCREMENT,DECREMENT} from "./actions-type"

export const increment =createAction(INCREMENT);
export const decrement =createAction(DECREMENT);