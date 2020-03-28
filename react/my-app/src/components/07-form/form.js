import React, { Component, createRef } from 'react'

export default class form extends Component {
    state={
        name:"Dengx",
        ischecked:false,
        sex:""
    }
    render() {
        const element=createRef();
        return (
            <div>
              <h1>非受控组件</h1>
              <h3>{this.state.name}</h3>
              <input type="text" defaultValue={this.state.name}/>
              <button onClick={()=>{
                  this.setState({
                      name:"lisi"
                  })
              }}>dainji</button>
               <input type="checkbox" defaultChecked={ this.state.ischecked}/>

               <h1>受控组件</h1>
               <h3>{this.state.name}</h3>
               <input type="text" ref={element} value={this.state.name} onChange={(event)=>{
                   this.setState({
                       name:event.target.value
                   })
                //    方法2
                //    this.setState({
                //        name:element.current.value
                //    })


               }}/>

               <label htmlFor="">{this.state.sex}</label>
               <input type="radio"  name="mysex"  checked={this.state.ischecked}  value="男"  onChange={(event)=>{
                        console.log(event.target.checked);
                    this.setState({
                        ischecked:event.target.checked,
                        sex:event.target.value
                   })
               }}/>
                 <label htmlFor="">{this.state.sex}</label>
               <input type="radio"  name="mysex"  checked={this.state.ischecked}  value="女"  onChange={(event)=>{
                        console.log(event.target.checked);
                    this.setState({
                        ischecked:event.target.checked,
                        sex:event.target.value
                   })
               }}/>

               {/* 下拉列表 */}
               <select name="" id="">
                   <option value=""></option>
                   <option value=""></option>
                   <option value=""></option>
                   <option value=""></option>
               </select>
            </div>
        )
    }
}
