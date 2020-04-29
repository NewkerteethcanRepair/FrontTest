import React, { Component } from "react";
import { connect } from "react-redux";
// import { withRouter } from 'react-router';
// import { getVipUserAsync } from "../../store/loginandregister/actions";
import "./login.css";
import imglogo from "../../img/mylogo.png";
// import
import axios from "axios";
// import { Form, Input, Button, Checkbox } from "antd";
// import React from "react";

//
class register extends Component {
  state = {
    VipUser: {
      VipName: "",
      VipPassword: "",
    },
  };
  //生命周期
  //   componentDidMount() {
  //     console.log(this.props.vipData);
  //     //   写请求 但是 redux 一般不放在组件里，放在store里面执行请求
  //     //通过 dispatch 去触发 redux 里面的东西 传进去 立马执行
  //     // 可以传一个方法
  //     this.props.dispatch(getVipUserAsync());
  //   }
  toregister = () => {
    this.props.history.push("/login");
  };
  usercheck = () => {
    // console.log(this.state.VipUser)
    let { VipName } = this.state.VipUser;
    // console.log(VipName);

    axios
      .post("VipUser/getall", {
        VipName,
      })
      .then((response) => {
        // console.log(this.state.isfalse);
        // console.log('====================================');
        if (response.data.length != 0 || this.state.VipUser.VipName == "") {
          //说明有一样的用户名字 需要 重新填写
          // console.log("ok");
          this.setState({
            isdisplay: 2,
          });
          // console.log(this.state.isdisplay);

          // let d=(this.state.isfalse);
          // console.log(d);
        } else {
          this.setState({
            isdisplay: 1,
          });
        }
      })
      .catch(function (error) {});
  };
  pwdcheck = () => {
    var reg = /^[A-Z][0-9A-Za-z]{5,10}/;
    if (reg.test(this.state.VipUser.VipPassword) == true) {
      this.setState({
        isdisplaypassword: 1,
      });
    } else {
      this.setState({
        isdisplaypassword: 2,
      });
    }
  };

  // 三元运算不行的 用这个 来控制 输入框正确与错误的样式变化
  userchangecolor = () => {
    if (this.state.isdisplay == 1) {
      return "is-valid  form-control";
    } else if (this.state.isdisplay == 2) {
      return "is-invalid form-control";
    } else {
      return "form-control";
    }
  };
  // 三元运算不行的 用这个 来控制 输入框正确与错误的样式变化
  passwordcolorChange = () => {
    if (this.state.isdisplaypassword == 1) {
      return "is-valid  form-control";
    } else if (this.state.isdisplaypassword == 2) {
      return "is-invalid  form-control";
    } else {
      return "form-control";
    }
  };


  // 注册点击按钮
  registerCLick=()=>{
    console.log("sda");
    let {VipName,VipPassword}=this.state.VipUser
    if(this.state.isdisplaypassword==1&&this.state.isdisplay==1){
      axios.post("/VipUser/add",{VipName,VipPassword})
      .then(res => {
        console.log(res)
        this.props.history.push("/login")
        
      })
      .catch(err => {
        console.error(err); 
      })
    }
    else{

    }
    
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
              <div className="logo-control col-sm-12">
                <img src={imglogo} alt="1"></img>
              </div>
              <div className="col-sm-6 offset-sm-3">
                <div className="login-box">
                  <h1 className="">注册</h1>
                  <form className="needs-validation ">
                    <div className="form-group">
                      <label htmlFor="validationCustom01">
                        <strong style={fontlabel}>帐号注册</strong>
                      </label>
                      <input
                        type="text"
                        className={
                          // ['form-control',this.state.isdisplay==1?'is-valid':"is-invalid"].join(' ')
                          this.userchangecolor()
                        }
                        placeholder="请输入帐号"
                        id="validationCustom01"
                        // value="dsad"
                        required
                        onBlur={(e) => {
                          this.setState(
                            {
                              VipUser: {
                                ...this.state.VipUser,
                                VipName: e.target.value,
                              },
                            },
                            () => {
                              this.usercheck();
                            }
                          );
                        }}
                      />
                      {/* style={{display:this.state.isdisplay? "block":"none"}} */}
                      <div className="invalid-feedback">
                        用户已存在或者不能使用
                      </div>
                      <div className="valid-feedback">可以使用的用户</div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="validationCustom02">
                        <strong style={fontlabel}>密码注册</strong>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="请输入密码"
                        id="validationCustom02"
                        // value=""
                        className={this.passwordcolorChange()}
                        required
                        onBlur={(e) => {
                          this.setState(
                            {
                              VipUser: {
                                ...this.state.VipUser,
                                VipPassword: e.target.value,
                              },
                            },
                            () => {
                              this.pwdcheck();
                            }
                          );
                        }}
                      />
                      <div className="invalid-feedback">
                        密码最少1个大写 6位以上
                      </div>
                      <div className="valid-feedback">可以使用的密码</div>
                    </div>
                  </form>
                  <div className="loginbtn">
                    <button
                      type="button"
                      className="btn btn-dark d-block"
                      onClick={this.registerCLick}
                    >
                      注册
                    </button>
                  </div>

                  <div className="clearfix otherbtn">
                    <button
                      className="btn-link btn float-left"
                      onClick={this.toregister}
                    >
                      <small>返回登录</small>
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
