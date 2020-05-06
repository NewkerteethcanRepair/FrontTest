import React, { Component } from "react";
import { Result, Button } from "antd";
import "./orderesult.css"
export default class componentName extends Component {
    exit=()=>{
        this.props.history.push("/main/index/")
    }
    mymenuto=()=>{
        this.props.history.push("/main/index/")
    }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Result
              status="success"
              title="购买成功！"
              subTitle={"订单号: "+this.props.match.params._id+"已生成,可以去我的订单里查看"}
              extra={[
                // <div></div>
                <Button type="primary" key="console" onClick={
                    this.exit
                }>
                  返回
                </Button>,
                <Button key="buy" onClick={
                    this.mymenuto
                }>查看我的订单</Button>,
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
