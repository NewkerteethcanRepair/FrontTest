import {createStore,combineReducers, applyMiddleware} from "redux";
import {count} from "./counter/reducers";
import {getlist} from "./todolist/reducers"
import {getlistAnt} from "./todolistexam/reducers"
import {filterdata} from "./todolistexam/reducers"
import logger from "redux-logger";
import thunk from "redux-thunk";

import {pageData} from "./students/reducers"
import {StudentDataTeacher} from "./studentsData/reducers"
// import {}

// import {createStore} from "redux";
// const store = createStore();
//把引入的放到仓库里面去

const store=createStore(
    combineReducers({count ,getlist,pageData,StudentDataTeacher,getlistAnt,filterdata}),
    applyMiddleware(thunk,logger)
);
export default store

//todolist 数据· 
// const 