// export const count =(state=1,action)=>{
    
//     switch(action.type){
//         case "increment":return state+1;
//         case "decrement": return state-1;
//         default:return state
//     }
//     // return state;
// }

// actions-type

import {handleActions} from "redux-actions"
import {INCREMENT,DECREMENT} from "./actions-type"


export const  count= handleActions({
    [INCREMENT]:(state,action)=>{
        return state+1

    },
    [DECREMENT]:(state,action)=>{
        return state-1
    }
},0)