import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// React元素渲染
// 底层实现
// const h2=React.createElement("h2", {key:0},"xuxuxuu1")
// const h21=React.createElement("h2",{key:1},"xuxuxuu1")
// const h22=React.createElement("h2",{key:2},"xuxuxuu1")
// const div=React.createElement("h2",null,[h2,h21,h22])

// jsx
function Hello(){

  const name="zhangshan"
  const students=["xx","2312","21321312"]
  return  <h1>{name}</h1>;
}
ReactDOM.render(


    <App></App>,

  // div, 只能用classname 不能用class
  // <div>
  //   {" "}
  //   <h1 className="" style={{backgroundColor:"yellowgreen",color:"#fff"}}>sdadasds</h1>
  //   必须要写js表达式
  //   <label htmlFor="">{name}!</label>
  //   <ul>
  //     {
  //       /* map遍历  返回的数组*/
  //       /* join() */
  //       /* 不需要拼接了 */
  //       students.map(item=><li key={item}>{item}</li>)
  //     }
  //   </ul>
  // </div>,

  document.getElementById("root")
);
