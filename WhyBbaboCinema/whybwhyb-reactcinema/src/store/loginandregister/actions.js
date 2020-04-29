import {createAction} from "redux-actions"
import {GET_VIPUSER} from "./actions-type"
import axios from "axios";
const getVipUser=createAction(GET_VIPUSER)

export const getVipUserAsync=({VipName,VipPassword})=>{
    return  (dispatch,getState)=>{
        //fetch发请求  也是一个promise对象
        // /VipUser/getall?xxx=1&xxx=2
       
        axios({
           method:'post',
           url: "/VipUser/getall",
           data: {
            VipName,VipPassword
           }
       }).then(res=>{
           console.log(res);
        
        if(res.data.length>0){

            dispatch(getVipUser(1))
            
        }
        else{
            dispatch(getVipUser(-1))
        }
   
           
           
       })
    //    console.log(getall);
    //    if(getall){
    //        dispatch(getVipUser(getall))
    //    }
    //    console.log('====================================');
       
  
    }
}