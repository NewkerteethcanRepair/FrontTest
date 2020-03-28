import {createStore,combineReducers, applyMiddleware} from "redux";
import {count} from "./counter/reducers";
import {getlist} from "./todolist/reducers"
import logger from "redux-logger";
import thunk from "redux-thunk";

import {pageData} from "./students/reducers"
import {StudentDataTeacher} from "./studentsData/reducers"

// import {createStore} from "redux";
// const store = createStore();
//把引入的放到仓库里面去

const store=createStore(
    combineReducers({count ,getlist,pageData,StudentDataTeacher}),
    applyMiddleware(thunk,logger)
);
export default store

//todolist 数据
// const 