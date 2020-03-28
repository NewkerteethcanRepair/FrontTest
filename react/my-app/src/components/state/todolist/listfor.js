// import React from 'react'

// export default function Listfor(props) {
//     // function listdata(){

//     //     props.datato.map((item,index)=>{
//     //         <li key={index}>{item.value}</li>
//     //     })
//     // }
//   const datalist=props.datato;
//   console.log(datalist);
//   function fordata(){
//     for(var i in datalist){
//     return  <li>{datalist[i].value}</li>
//     }
//   }

//     return (
//         <ul>

//            {/* datalist.map((item,index)=>{
//            <li key={index}>{item.value}</li>
//         }) */}
//         {fordata()}

//         </ul>
//     )
// }
import React, { Component } from "react";

export default class Listfor extends Component {
  render() {
    return (
      <div>
     
        {/* this.props.listData.map(item => (
                        <li key={item.id} className={item.done ? 'done' : ''}
                            onClick={() => {
                                this.props.doneToggle(item.id);
                            }}
                        >
                            {item.text}
                        </li>
                    )) */}
      </div>
    );
  }
}
