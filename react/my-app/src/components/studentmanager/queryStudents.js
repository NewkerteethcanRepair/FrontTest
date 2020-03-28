import React, { Component,createRef,useReducer } from 'react'

// import React from 'react'

const reducer =(state,action)=>{
    console.log('====================================');
    console.log();
    console.log('====================================');
    switch(action.type){
        case 'condition': 
        
        // let d=action.value;
        state.condition.type=action.value;
        console.log( state.condition.type);
        
        state.condition.value=action.value1

        console.log(state.condition.value);
        
        // return {type:action.value,value:action.value1}
        return state
        // case 'conditionvalue': return  action.value1
        // case  'input': return  action.value
    }

}

export default function QueryStudents(props) {
    const [inputvalue,dispath]=useReducer(reducer,
        {
            condition: {
                type: 'name',
                value: ''
            }
        }
        );
        console.log(inputvalue)
    return (
        <div>
             <h2>查询学生</h2>
                <label>查询类型：</label>
                <select value={inputvalue.value} onChange={(e) => {
                    // this.setState({
                    //     condition: {
                    //         ...condition,
                    //         type: e.target.value
                    //     }
                    // })
                    dispath({"type":"condition",value:e.target.value})

                }}>
                    <option value="name">姓名</option>
                    <option value="age">年龄</option>
                    <option value="gender">性别</option>
                </select>
                <input type="text" value={inputvalue.value1} onChange={(e) => {
                    // this.setState({
                    //     condition: {
                    //         ...condition,
                    //         value: e.target.value
                    //     }
                    // })
                    dispath({"type":"condition",value:inputvalue.condition.type ,value1:e.target.value})
                }} onBlur={() => 
                    // condition:{
                    //     ...condition,
                       
                    // }
                    // log
                
                   
                
                props.querystudent(inputvalue)
                
                
               
                } />
        </div>
    )
}
