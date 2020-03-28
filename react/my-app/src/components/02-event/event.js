// rcc rfc 快捷键
import React, { Component } from 'react'
// 类组件
 class Event extends Component {
    myClick(name){
        console.log('====================================');
        console.log("123123321321");
        console.log('====================================');
    }
    render() {
        
        return (
            <div>
                <button onClick={ ()=>{
                    this.myClick("xixixixi")
                }}>点击了</button>
                {/* bind方法 */}
                {/* <button onClick={ this.myClick.bind(this,"xixixix")
                }>点击了</button> */}
                {/* <Click></Click> */}
            
            </div>
        )
    }
}
// 函数组件
 function Click(){
    function myClick(){
        console.log("function");
        
    }
    return (
        <button onClick={myClick}>函数组件</button>
    )
}
export  {Event,Click}
