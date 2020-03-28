import React, { useState, createRef, useReducer } from "react";

//接收两个参数 state == count
const reducer =(state,action)=>{
    console.log('====================================');
    console.log();
    console.log('====================================');
    switch(action.type){
        case 'increment': return ~~state+1
        case 'decrement': return state-1;
        case  'input': return  action.value
    }
}
const element = createRef();
export default function Counter() {
  //返回数组 （传入初始值）   [初始值，返回值]
//   const [count, setCount] = useState(0);

  // 第二个方法 useReduce 方法 处置值  返回 数组[count,dispath]
  const [count,dispath]=useReducer(reducer,0);
  return(

    <>
    <h1>hoop计算器:{count}</h1>
    <button onClick={
        ()=>{
            dispath({type:'increment'});//触发reducer执行
        }
    }>+1</button>
    <button onClick={()=>{
         dispath({type:'decrement'});//触发reducer执行
    }} >-1</button>

      <input
        type="text"
        ref={element}
        value={count}
        onChange={e => {
          dispath({type:'input' ,value:[~~e.target.value]});
        }}
      />
    </>
  )  
 

//  usestate 

//   const element = createRef();
//   return (
//     <div>
//       <h1>计算器:{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -1
//       </button>
//       <input
//         type="text"
//         ref={element}
//         value={count}
//         onChange={e => {
//           setCount(~~e.target.value);
//         }}
//       />
//     </div>
//   );
}
