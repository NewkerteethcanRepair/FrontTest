import React, { Component } from 'react'

export default class Lifecycle extends Component {
    state={
        name:"张三"
    }
    componentDidMount(){
        console.log("componentDidMount");
        
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.name===this.state.name){
            return false;
        }
        return true
    }

    render() {
        return (
            <div>
                <h1 onClick={()=>{
                    this.setState({
                        name:"dsadsa"
                    })
                }}>
                    hello 
                </h1>
            </div>
        )
    }
}
