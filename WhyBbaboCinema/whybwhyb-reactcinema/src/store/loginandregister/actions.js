import {createAction} from "redux-actions"
import {GET_VIPUSER} from "./actions-type"
import axios from "axios";
const getVipUser=createAction(GET_VIPUSER)

export const getVipUserAsync= ({VipName,VipPassword})=>{
    return async (dispatch,getState)=>{
        //fetch发请求  也是一个promise对象
        // /VipUser/getall?xxx=1&xxx=2
       
      await  axios({
           method:'post',
           url: "/VipUser/getall",
           data: {
            VipName,VipPassword
           }
       }).then(res=>{
           console.log(res.data);
        
        if(res.data.length>0){

            dispatch(getVipUser(res.data))
            
        }
        else{
            dispatch(getVipUser(res.data))
        }
   
           
           
       })
    //    console.log(getall);
    //    if(getall){
    //        dispatch(getVipUser(getall))
    //    }
    //    console.log('====================================');
       
  
    }
}