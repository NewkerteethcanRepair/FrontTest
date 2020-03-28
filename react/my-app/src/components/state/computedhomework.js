import React, { Component } from 'react'
import Count from "./computedhomeworkcount"
export default class computedhomework extends Component {
                 state = {
                   value: 0
                 };
                 add(num) {
                   if (parseInt(num) != NaN) {
                     var d = parseInt(num);
                     d++;
                     this.setState({
                       value: d
                     });
                   }
                 }
                 subtract(num) {
                   if (parseInt(num) != NaN) {
                     var d = parseInt(num);
                     d--;
                     this.setState({
                       value: d
                     });
                   }
                 }
                 focusinput(num) {
                   if (parseInt(num) != NaN) {
                     console.log("====================================");
                     console.log(num);
                     var d = parseInt(num);

                     console.log("====================================");
                     // <h1></h1>
                     // this.subtract( d);
                     // this.add( d);
                     console.log("====================================");
                     console.log(NaN == NaN);
                     console.log("====================================");
                     this.setState({
                       value: d
                     });
                     console.log(this.state.value);
                   } else {
                     alert("请输入数字");
                   }
                 }
                 render() {
                   const element = React.createRef();
                   return (
                     <div className="layui-container">
                       <div className="layui-row">
                         <div className="layui-col-sm4 layui-col-md-offset4">
                           {/* <span data-count={this.state.value}>{this.state.value}</span> */}
                           <Count data={this.state.value}></Count>
                           <input
                             type="text"
                             ref={element}
                             onBlur={() => {
                               // console.info(parseInt(element.current.value))
                               this.focusinput(element.current.value);
                            //    element.current.value="";

                             }}
                             className="layui-input"
                           />
                           {/* <span>{this.state.value}</span> */}
                           <button
                             className="layui-btn  layui-text layui-btn-radius"
                             onClick={() => {
                               this.add(this.state.value);
                               //  console.info(parseInt(element.current.value))
                             }}
                           >
                             +1
                           </button>
                           <button
                             className="layui-btn  layui-text layui-text layui-btn-radius layui-btn-warm "
                             onClick={() => {
                               this.subtract(this.state.value);
                               // console.log("sxs")
                             }}
                           >
                             -1
                           </button>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
