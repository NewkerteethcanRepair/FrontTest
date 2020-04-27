import {createStore,combineReducers, applyMiddleware} from "redux";

import {gettodolist} from "./todolist/reducers"
const store=createStore(
    // combineReducers({gettodolist}),
    // applyMiddleware(thunk,logger)
);

export default store