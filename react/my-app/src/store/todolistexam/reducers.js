import { handleActions } from "redux-actions";
// import { GETSTUDENTDATA } from "./actions.type";
import { ADDTODOLIST } from "./actions-type";
import { DONETOGGLE } from "./actions-type";
import { FILTER } from "./actions-type";

const init = [
  { id: 0, text: "HTML", done: false },
  { id: 1, text: "CSS", done: true },
  { id: 2,done: false, text: "JS",  }
];
//使用 redux-actions 操作 state  原来reducer操作state写法要使用switch或if else来匹配:
export const getlistAnt = handleActions(
  {
    [ADDTODOLIST]: (state, action) => [
      ...state,
      {
        id: action.payload.newid,
        text: action.payload.text,
        done: false
      }
      // console.log();
    ],
    [DONETOGGLE]: (state, action) =>(
      state.map((item, index) => {
        if (item.id == action.payload) {
            // console.log(item);
            
          return {...item, done:!item.done}
        }
        else{
            return item 
        }
      })
    
    ),

  },
  init
);

export const filterdata= handleActions({

  [FILTER]:(state,action)=>{
    return action.payload
  }


},"1")


