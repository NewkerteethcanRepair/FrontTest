import React, { Component } from "react";
import "./mymenu.css";
import axios from "axios";

export default class mymenu extends Component {
  state = {
    orderdata: [],
  };
  componentDidMount() {
    axios
      .post("/order/getall", { VipUserId: this.props.match.params._id })
      .then((res) => {
        console.log(res.data);
        if (res.data != null) {
          this.setState({
            orderdata: res.data,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="my-orderall">
              {/* <div className="float-left">
                  <input type="checkbox" />
                  全选
                </div>
                <div className="float-left">订单时间</div>
                <div className="float-left">电影</div>
                <div className="float-left">电影时间</div>
                <div className="float-left">订单操作</div>
                <div className="float-left">数量</div>
                <div className="float-left">金额</div>
                <div className="float-left">订单操作</div> */}
              {this.state.orderdata.map((item, index) => {
                return (
                  <div className="everyorderlist">
                    <div className="thisorder-head">
                      <p>
                        订单编号：{item._id}{" "}
                        <span className="float-right">
                          {" "}
                          订单时间：{item.OrderTime}
                        </span>
                      </p>
                      <span>
                        <strong>电影名:{item.MoviesInforId.MoviesName}</strong>
                      </span>

                      {/* <span className="float-right"> 影院：{item.CinemaId.CinemaName}</span> */}
                      {/* <span className="float-right"> 订单时间：{item.}</span> */}
                    </div>
                    <div className="thisorder-body">
                      <img
                        src={require("../../../images/" +
                          item.MoviesInforId.Movieimg +
                          ".jpg")}
                        alt=""
                      ></img>
                      <span>影院厅:{item.OrderRoom}</span>
                      <span>单价:{item.OrderPrice}元/张</span>
                      <span>数量:{item.OrderSeat.length}</span>
                      <span>总价:<strong>{((item.OrderPrice-0)*item.OrderSeat.length)+"元"}</strong></span>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
