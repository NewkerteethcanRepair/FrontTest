import React, { Component } from "react";
import Son from "./son"
export default class father extends Component {

  fahterval = (val) => {
    console.log(val+1);
  };
  
    
  render() {
    return (
      <>
        <div> 我是爸爸</div>
        <Son son={this.fahterval}></Son>
        {/* <button></button> */}
      </>
    );
  }
}
