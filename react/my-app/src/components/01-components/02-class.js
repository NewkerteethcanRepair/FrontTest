// class组件
import React from 'react';

class Hello extends React.Component{
    // 可以不写!!!!
    // constructor(props){
    //     super(props)
    // }

    //
    
    static defaultProps={
        name:"xxx"
    }
    render(){
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        return (
            
           <>
                <h2>class 组件 Hello</h2>
                <h3>{this.props.name}</h3>
           </>
        )
    }
}
export default Hello