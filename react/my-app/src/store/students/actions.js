import {createAction} from "redux-actions";
import {GETSTUDENTDATA} from "./actions.type"



const getStudentsByPage=createAction(GETSTUDENTDATA);


export const getStudentsByPageAsync=()=>{
    return async(dispatch,getState)=>{
        // let pageData = {
        //     currentPage: 1, //当前页
        //     pageSize: 5,
        //     searchkey: "-1",
        //     searchvalue: "-1"
        // }&searchkey='-1'&searchvalue:'-1'
        const pageData=await fetch("/sd/students?currentPage=1&pageSize=3&searchkey=-1&searchvalue=-1").then(res=>res.json());
        // const pageData=await 

     
        console.log(pageData);
        
        if(pageData){
            dispatch(getStudentsByPage(pageData))
            
        }
    }
}