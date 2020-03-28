// import React from 'react'
import { connect } from "react-redux";
import {increment,decrement} from "../../store/counter/actions"
import React, { Component } from "react";
// import Counter from '../10-hook/counter';
class Counter extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1>计算器:{this.props.count}</h1>
        <button
          onClick={() => {
            // dispatch({ type: "increment" });
            // 方法2 redux-actions
              dispatch(increment());
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            // dispatch({ type: "decrement" });
            // 方法2 redux-actions
            dispatch(decrement());
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
// state 获取到的是所有数据
const mapStateToProps = state => {
  return { count: state.count };
};
// 连接 跟仓库关联
export default connect(mapStateToProps)(Counter);
