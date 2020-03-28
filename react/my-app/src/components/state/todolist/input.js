// import React from 'react'

// export default function input(porps) {
//     state={
//           value: '',
//           done: false
//     }
//     function add(element){
//         state.value=element
//         porps.datato.push({value:element,done:false});
//     }
//     const element = React.createRef();
//     return (

//         <div>
//             <h1>新增</h1>
//             <input type="text"   ref={element}  />
//             <button onClick={()=>{
//             add(element.current.value)
//             element.current.value="";
//             }
//             }>新增</button>
//         </div>
//     )
// }

import React, { Component } from "react";

export default class Input extends Component {
  add(){

  }
  render() {
    const element = React.createRef();
    
    return (
      <div>
        <h1>todolist</h1>
        <input type="text"  ref={element}/>
        <button
          onClick={() => {
            this.add(element.current.value);
            element.current.value = "";
          }}
        >add</button>
      </div>
    );
  }
}
