import React from 'react'
import {useReducer} from "react"
// export default function Hook() {
//     return (
//         <div>
            
//         </div>
//     )
// }
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment': return ~~state+1
        case 'decrement': return state-1;
        case  'input': return  action.value
    }
}
// const [count,dispath]=useReducer(reducer,0);
// 自定义hook 必须以 use 开头 hook 来命令

export const useCountState =()=>{
    const [count,dispath]=useReducer(reducer,0);

    function increment(){
        dispath({type:'increment'})
    }
    function decrement(){
        dispath({type:'decrement'})
    }
    function inputCount(value){
        dispath({type:"input",value})
    }
    return [count,{increment,decrement,inputCount}]; 
}
//触发