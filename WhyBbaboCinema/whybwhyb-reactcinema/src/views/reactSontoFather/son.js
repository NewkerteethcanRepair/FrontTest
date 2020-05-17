import React, { Component } from 'react';

export default class son extends Component {
    state={
        a:3
    }
    // son(){
      
    //     console.log(this.state.a);
        
        
    // }
  render() {
    return (
    <>
          <div> 子给父亲 </div>
          <button onClick={()=>{
            this.props.son(this.state.a)
          }}>点击传值</button>
    </>
      
    );
  }
}
