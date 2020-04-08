import React, { Component, createRef } from "react";
import { Row, Col } from "antd";
// import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { Button } from "antd";
import { connect } from "react-redux";
import { addto, donetoggle } from "../../store/todolistexam/actions";
// import React, { Component } from 'react';
// import { Table } from 'antd'
import Filterexam from "../todolistexam/filterexam";
import "./Todolistexam.css";
class Todolistexam extends Component {
  state={
    btnNames:['1','2','3']
  }


  // getdata:this.props.getlistAnt;
  // filterdata(gettypes) {
  //   if (gettypes == 1&&underfind) {
  //     getdata.filter(item => {
  //       return item;
  //     });
  //   } else if (gettypes == 2) {
  //     getdata.filter(item => {
  //       return item.done == false;
  //     });

  //   }
  //   else if (gettypes == 3) {
  //     getdata.filter(item => {
  //       return item.done == true;
  //     });

  //   }
  // }

  render() {
    const getinput = createRef();
    const getdata = this.props.getlistAnt;
    // this.filterdata(gettypes);
    // console.log(getdata);
    // const filterdata=this.props.filterdata
    // console.log(filterdata);
    
    // const columns = [{},{data:"数据列表"}];

    return (
      <>
        <Row>
          <Col span={12} offset={6} className="text-center">
            <h1>todolist antd版本</h1>

            <div className="example-input">
              <Row>
                <Col span={20}>
                  {" "}
                  <Input size="large" ref={getinput} placeholder="添加数据" />
                </Col>
                <Col span={4}>
                  {" "}
                  <Button
                    type="ghost"
                    size="large"
                    onClick={() => {
                      console.log(getinput.current.state.value);
                      const newid = getdata.length;
                      this.props.dispatch(
                        addto({
                          text: getinput.current.state.value,
                          newid: newid
                        })
                      );
                      getinput.current.state.value = "";
                    }}
                  >
                    添加
                  </Button>{" "}
                </Col>
              </Row>
              {/* <Input placeholder="默认尺寸" />
              <Input size="small" placeholder="小尺寸" /> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6} className="">
            <ul>
              {getdata.map((item, index) => {
                return (
                  <li key={item.id}>
                    <h1
                      className={item.done ? "done" : ""}
                      onClick={() => {
                        console.log(item.id);
                        const id = item.id;
                        this.props.dispatch(donetoggle(id));
                      }}
                    >
                      {item.id} /{item.text}
                    </h1>
                  </li>
                );
              })}
            </ul>
            {/* <Table columns={columns} dataSource={getdata.text} pagination={false} key={getdata.id}/> */}
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6} className="">
            <Filterexam ></Filterexam>
          </Col>
        </Row>
      </>
    );
  }
}
const filterData=(getlistAnt,filterdata)=>{
  switch(filterdata){
    case"1": return getlistAnt
    case"2": return getlistAnt.filter(item=> !item.done);
    case"3": return getlistAnt.filter(item=> item.done);
  }
}
// state 获取到的是所有数据
const mapStateToProps = state => {
  console.log("====================================");
  console.log(state);
  console.log(state.getlistAnt);
  
  console.log("====================================");
  return { getlistAnt: filterData(state.getlistAnt,state.filterdata),
   };
};
// 连接 跟仓库关联

export default connect(mapStateToProps)(Todolistexam);
