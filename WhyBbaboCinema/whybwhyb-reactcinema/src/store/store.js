import { createStore,combineReducers,applyMiddleware } from "redux"; 
import logger from "redux-logger";
import thunk from "redux-thunk";

import {vipData} from "./loginandregister/reducers"
import {MoviesData} from "./mainmoviedata/reducers"



const store = createStore(

    combineReducers({vipData,MoviesData}),
    applyMiddleware(thunk,logger)
);
export default store