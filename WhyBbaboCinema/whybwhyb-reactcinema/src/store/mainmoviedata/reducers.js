import { handleActions } from "redux-actions";
import { GET_MOVIESDATA} from "./actions-type";

// 初始数据
// init初始化

const initMoviesData = [];
export const MoviesData=handleActions(

    {
        [GET_MOVIESDATA]:(state,{payload})=>payload,
    },
    initMoviesData
)