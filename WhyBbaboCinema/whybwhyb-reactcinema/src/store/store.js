import { createStore,combineReducers,applyMiddleware } from "redux"; 
import logger from "redux-logger";
import thunk from "redux-thunk";

import {vipData} from "./loginandregister/reducers"
import {MoviesData} from "./mainmoviedata/reducers"
import {CinemaData} from "./cinemadata/reducers"



const store = createStore(

    combineReducers({vipData,MoviesData,CinemaData}),
    applyMiddleware(thunk,logger)
);
export default store