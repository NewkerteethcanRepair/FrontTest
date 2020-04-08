import React from "react";
import { Radio } from "antd";
import { filterdata } from "../../store/todolistexam/actions";
import { connect } from "react-redux";
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
function Filterexam(props) {
  const data = props.getlistAnt;
  // const filterdata=props.filterdata;
  console.log("props.getlistAnt:" + data);
  const all = "1";
  const active = "2";
  const done = "3";
  
  return (
    <div>
      <RadioGroup defaultValue={all} size="large">
        <RadioButton
          value={all}
          onClick={() => {
            props.dispatch(filterdata(all))
           
          }}
        >
          ALL
        </RadioButton>
        <RadioButton
          value={active}
          onClick={() => {
          props.dispatch(filterdata(active))
          }}
        >
          Active
        </RadioButton>
        <RadioButton
          value={done}
          onClick={() => {
            // props.filterdata(done);
            props.dispatch(filterdata(done))
          }}
        >
          Done
        </RadioButton>
        {/* <RadioButton value="d">成都</RadioButton> */}
      </RadioGroup>
      <span>{props.doneTotal}/{props.total}</span>
    </div>
  );
}
const mapStateToProps = state => {
  console.log("====================================");
  console.log(state);
  console.log(state.getlistAnt);
  console.log("====================================");
  //返回的值都会放到当前的组件里
  return {  total: state.getlistAnt.length,
            // current:state.current,
            doneTotal:state.getlistAnt.filter(item=>item.done).length,
            };
};
// 连接 跟仓库关联
export default connect(mapStateToProps)(Filterexam);
