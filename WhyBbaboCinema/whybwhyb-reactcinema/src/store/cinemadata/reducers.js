import { handleActions } from "redux-actions";
import {GET_CINEMATADATA} from "./actions-type";

// 初始数据
// init初始化

const initCinemaData= [
    
]
export const CinemaData=handleActions(

    {
        [GET_CINEMATADATA]:(state,{payload})=>payload,
    },
    initCinemaData
)