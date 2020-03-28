import React from 'react';



// 函数组件
function Welcome(props) {
    console.log('====================================');
    console.log(props.name);
    console.log('====================================');
    return <h1>xiangxaing</h1>

}
Welcome.defaultProps={name:"xxxx"}
export default Welcome;
