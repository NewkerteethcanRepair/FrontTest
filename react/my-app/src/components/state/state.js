import React, { Component } from 'react'

export default class MyState extends Component {


    // es7简写
    // 函数组件没有state
    state={
        name:"dengx"
    }
    Changename(){
        this.setState({
            name:"dengx update!"
        })
    }
    // 方法2 react 特有
    // Changename=()=>{
    //     this.setState({
    //         name:"dengx update!"
            
    //     })
    // }
    
    render() {
          {/* 获取input的值 用ref 拿到他的节点 */}
        const element=React.createRef();
        return (
            <>
             <h1>hello {this.state.name}</h1>   
                <button onClick={() => { 
                    this.Changename()
                }}>state 修改</button>
                {/* 方法2
                   <button onClick={this.Changename}>state 修改</button> */}



            {/* 获取input的值 */}
              <input type="text" ref={element} onBlur={()=>{
                
                  console.log(element.current.value)
              }}/>
            </>
        );
    }
}
