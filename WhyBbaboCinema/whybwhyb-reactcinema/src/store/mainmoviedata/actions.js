import {createAction} from "redux-actions"
import {GET_MOVIESDATA} from "./actions-type"
import axios from "axios";
const getMoivesdata=createAction(GET_MOVIESDATA)


export const getMoivesdataAsync=()=>{
    return async(dispatch,getState)=>{

     await axios.post("/Moviesinfor/getall")
        .then(res => {
            console.log(res)
            if(res.data.length>0){
                dispatch(getMoivesdata(res.data))
            }
        })
        .catch(err => {
            console.error(err); 
        })
  
    }

}