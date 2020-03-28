import { connect } from "react-redux";
// import {increment,decrement} from "../../store/counter/actions"
// import React, { Component } from "react";

import React, { Component } from "react";

class todolist extends Component {
  render() {
    const { getlist } = this.props;
    console.log(this.props);

    return (
      <div>
        <h1>todolist</h1>
        <input type="text" />
        <button>确定添加</button>
        {getlist.map(item => (
          <li className={item.done ? "done" : ""} key={item.id}>
            {item.text}
          </li>
        ))}
        
      </div>
    );
  }
}

const mapStateToprops = state => {
  return { getlist: state.getlist };
};
export default connect(mapStateToprops)(todolist);
