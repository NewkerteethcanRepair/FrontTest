import {createAction} from "redux-actions"
import {GET_CINEMATADATA} from "./actions-type"
import axios from "axios";
const getCinemadata=createAction(GET_CINEMATADATA)

// getCinemadataAsync
export const getCinemadataAsync=()=>{
    return async(dispatch,getState)=>{

     await axios.get("/wbcinema/getall")
        .then(res => {
            console.log(res)
            if(res.data.length>0){
                dispatch(getCinemadata(res.data))
            }
        })
        .catch(err => {
            console.error(err); 
        })
  
    }

}