import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getVipUserAsync } from "../../store/loginandregister/actions";
import "./login.css";
import imglogo from "../../img/mylogo.png";
import store from "../../store/store";
import axios from "axios";
// import { Form, Input, Button, Checkbox } from "antd";
// import React from "react";

//
class login extends Component {
  state = {
    VipUser: {
      VipName: "",
      VipPassword: "",
    },
    isfalse:false,
  };
  //生命周期
  // componentDidMount() {
  //   console.log(this.props.vipData);
  //   //   写请求 但是 redux 一般不放在组件里，放在store里面执行请求
  //   //通过 dispatch 去触发 redux 里面的东西 传进去 立马执行
  //   // 可以传一个方法
  //   this.props.dispatch(getVipUserAsync());
  // }
  toregister = () => {
    this.props.history.push("/register");
  };
  logincontrol = () => {
    console.log(this.state.VipUser);


    // ****redux 方法 有问题 （好像不得行 要点击两次 有没有监听 redux 数据的方法？）
    // this.props.dispatch(getVipUserAsync(this.state.VipUser));
    // console.log('====================================');
    // console.log(this.props.dispatch(getVipUserAsync(this.state.VipUser)));
    // console.log('====================================');
   
    // if(this.props.vipData==1){
    //   this.props.history.push("/")
    //   console.log('====================================');
    //   console.log(this.props.vipData);
    //   console.log('====================================');
    //   console.log("asdd")
    // }


    // 常规方法  
    let {VipName,VipPassword}=this.state.VipUser
    axios.post("/VipUser/getall",{VipName,VipPassword})
    .then(res => {
      console.log(res)
      if(res.data.length>0){
        this.props.history.push("/")
      }
      else{
        console.log("失败登录");
        this.state.isfalse=true;
        
      }
    })
    .catch(err => {
      console.error(err); 
    })

   
  };


  render() {
    const { vipData } = this.props;
    // const layout = {
    //   labelCol: { span: 8 },
    //   wrapperCol: { span: 16 },
    // };
    // const tailLayout = {
    //   wrapperCol: { offset: 8, span: 16 },
    // };
    const fontlabel = {
      fontSize: "20px",
    };

    return (
      <>
        <div className="backall">
          <div className="container">
            <div className="row">
              <div className="logo-control col-sm-12">
                <img src={imglogo} alt="1"></img>
              </div>
              <div className="col-sm-6 offset-sm-3">
                <div className="login-box">
                  <h1 className="">登录</h1>
                  <form>
                    <div className="form-group">
                      <label htmlFor="validationCustom01">
                        <strong style={fontlabel}>帐号</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="请输入会员帐号"
                        id="validationServer01"
                        // value=""
                        required
                        onChange={(e) => {
                          this.setState(
                            {
                              VipUser: {
                                ...this.state.VipUser,
                                VipName: e.target.value,
                              },
                            },
                            () => {
                              // console.log(this.state.VipUser);
                            }
                          );
                        }}
                      />
                      <div className="invalid-feedback">帐号不存在</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="validationCustom01">
                        <strong style={fontlabel}>密码</strong>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="请输入密码"
                        id="validationServer02"
                        // value=""
                        onChange={(e) => {
                          this.setState({
                            VipUser: {
                              ...this.state.VipUser,
                              VipPassword: e.target.value,
                            },
                          });
                        }}
                        required
                      />
                      <div className="invalid-feedback">密码错误</div>
                    </div>
                  </form>
                  <div className="loginbtn">
                    <button
                      type="button"
                      className="btn btn-dark d-block"
                      onClick={() => {
                        this.logincontrol();
                      
                      }}
                    >
                      登录
                    </button>
                  </div>

                  <div className="clearfix otherbtn">
                    <button
                      className="btn-link btn float-left"
                      onClick={this.toregister}
                    >
                      <small>立即注册</small>
                    </button>
                    <button className="btn-link btn float-right">
                      <small>忘记密码</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  vipData: state.vipData,
});

export default connect(mapStateToProps)(login);
