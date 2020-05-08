import {createAction} from "redux-actions"
import {GET_MOVIESDATA} from "./actions-type"
import axios from "axios";
const getMoivesdata=createAction(GET_MOVIESDATA)


export const getMoivesdataAsync=({pageSize,current})=>{
    if(pageSize==undefined){
        pageSize=1000;
    }
    console.log("getaction:"+pageSize,current);
    
    return async(dispatch,getState)=>{
        // console.log(pageSize,current);
        // let pageSize
     await axios.post("/Moviesinfor/getall",{pageSize:pageSize,current:current})
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