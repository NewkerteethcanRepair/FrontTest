import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { getVipUserAsync } from "../../store/loginandregister/actions";
import "./login.css";
import imglogo from '../../img/mylogo.png';
// import { Form, Input, Button, Checkbox } from "antd";
// import React from "react";

//
class register extends PureComponent {
  //生命周期
//   componentDidMount() {
//     console.log(this.props.vipData);
//     //   写请求 但是 redux 一般不放在组件里，放在store里面执行请求
//     //通过 dispatch 去触发 redux 里面的东西 传进去 立马执行
//     // 可以传一个方法
//     this.props.dispatch(getVipUserAsync());
//   }
  toregister=()=>{
    this.props.history.push("/login")
  }
  usercheck=()=>{

  }
  pwdcheck=()=>{

  }
  
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
              
                <div className="logo-control col-sm-12"><img src={imglogo} alt="1"></img></div>
                <div className="col-sm-6 offset-sm-3">
                  <div className="login-box">
                  <h1 className="">
                        注册
                  </h1>
                    <form>
                      <div className="form-group">
                        <label htmlFor="validationCustom01">
                          <strong style={fontlabel}>帐号注册</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="请输入帐号"
                          id="validationServer01"
                          // value=""
                          required
                          onBlur={this.usercheck()}
                        />
                        <div className="invalid-feedback">用户已存在或者不能使用</div>
                      </div>
    
                      <div className="form-group">
                        <label htmlFor="validationCustom01">
                          <strong style={fontlabel}>密码注册</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="请输入密码"
                          id="validationServer02"
                          // value=""
                          required
                          onBlur={this.pwdcheck()

                          }
                        />
                        <div className="invalid-feedback">密码最少1个大写 6位以上</div>
                      </div>
                    </form>
                    <div className="loginbtn">
                      <button type="button" className="btn btn-dark d-block">
                        注册
                      </button>
                    </div>
    
                    <div className="clearfix otherbtn">
                      <button className="btn-link btn float-left" onClick={this.toregister} >
                        <small >返回登录</small>
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

export default connect(mapStateToProps)(register);
