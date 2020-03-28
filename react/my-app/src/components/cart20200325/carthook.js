import { useReducer } from "react";
// import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "getall":
      return state
    // case "decrement":
    //   return state - 1;
    // case "input":
    //   return action.value;
  }
};
export const useProductCountState = () => {
  const [productdata, dispath] = useReducer(reducer, [
    { id: 0, name: "苹果", price: "5", num: "1" },
    { id: 1, name: "banana", price: "5", num: "1" },
    { id: 2, name: "pear", price: "5", num: "1" },
    { id: 3, name: "orange", price: "5", num: "1" }
  ]);
  
  function getall() {
    dispath({ type: "getall" });
  }
  function increase(){
    dispath({type:"increment"})
  }
  function decrease(){
    dispath({type:"decrese"})
  }
  function increment(){
    dispath({type:"increment"})
  }

  return [productdata,{getall}]
};

// export const useCountState =()=>{
//     const [count,dispath]=useReducer(reducer,0);

//     function increment(){
//         dispath({type:'increment'})
//     }
//     function decrement(){
//         dispath({type:'decrement'})
//     }
//     function inputCount(value){
//         dispath({type:"input",value})
//     }
//     return [count,{increment,decrement,inputCount}];
// }
