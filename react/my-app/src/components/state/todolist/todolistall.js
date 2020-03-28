import React, { Component } from 'react'
import Input from "./input"
import Listfor  from "./listfor"
import  cssdone  from "./todolistall.css"
export default class todolistall extends Component {
    state={
        listData: [
            { value: 'HTML', done: false },
            { value: 'CSS', done: true },
            { value: 'JavaScript', done: false }
        ],
    }
    render() {
        return (
            <>
             <div>
            
             <Input datato={this.state.listData}></Input>
             <Listfor datato={this.state.listData}></Listfor>

             </div>   
            </>
        )
    }
}
