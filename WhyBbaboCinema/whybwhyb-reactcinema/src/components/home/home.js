import React, { PureComponent } from "react";
import { Menu, Input, Affix, Mentions } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import imglogo from "../../img/mylogo.png";
import "./home.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Search } = Input;

// function dsad()


export default class home extends PureComponent {
  state = {
    current: "main",
    isuser: false,
  };
  // componentDidUpdate(){
  //   if (sessionStorage.getItem("user")!=null) {
  //     this.setState({
  //       isuser: true,
  //     });
  //   } else {
  //     this.setState({
  //       isuser: false,
  //     });
  //   }
  // }
  
  componentDidMount() {
    console.log(sessionStorage.getItem("user"));
    
    if (sessionStorage.getItem("user")!=null) {
      this.setState({
        isuser: true,
      });
    } else {
      this.setState({
        isuser: false,
      });
    }
  }
  //用户条件渲染
  // Userloggin = () => {
  //   if (this.state.isuser) {
  //     return (
  //       <>
  //         <Avatar
  //           shape="square"
  //           size="large"
  //           icon={<UserOutlined />}
  //           style={{
  //             backgroundColor: "#87d068",
  //             float: "right",
  //           }}
  //         />
  //         <Menu.Item style={{ width: 200, float: "right" }}>
  //           用户: {sessionStorage.getItem("user").VipName}
  //         </Menu.Item>
  //         <SubMenu title="子菜单">
  //           <Menu.Item>我的账单</Menu.Item>
  //           <Menu.Item>退出</Menu.Item>
  //         </SubMenu>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <SubMenu title="用户登录" style={{ width: 200, float: "right" }}>
  //           <Menu.Item key="login">登录</Menu.Item>
  //           <Menu.Item key="register">注册</Menu.Item>
  //         </SubMenu>
  //       </>
  //     );
  //   }
  // };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });

    if (e.key == "main") {
      this.props.history.push("/main/index");
    }
    if (e.key == "movieslist") {
      this.props.history.push("/main/movieslist");
    }

    if (e.key == "login") {
      this.props.history.push("/login");
    }
    if (e.key == "register") {
      this.props.history.push("/register");
    }
    if (e.key == "cinemalist") {
      this.props.history.push("/main/cinema");
    }
    if (e.key == "cancel") {
      window.sessionStorage.removeItem("user");
      // this.props.history.push("/main/index");
      window.location.reload()
    }

  };
  render() {
    // const [top, setTop] = useState(10);
    // const {Search}=this.props
    let user=JSON.parse(sessionStorage.getItem("user"))
    return (
      <>
        <div className="backall">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 menu-first">
                <div className="logo-control">
                  <img src={imglogo}></img>
                </div>
                <Affix>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    theme="dark"
                  >
                    <Menu.Item key="main">
                      <MailOutlined />
                      首页
                    </Menu.Item>
                    <Menu.Item key="movieslist">
                      <AppstoreOutlined />
                      电影列表
                    </Menu.Item>
                    <Menu.Item key="cinemalist">影院</Menu.Item>
                    <Menu.Item key="alipay">
                      {/* <a href="/" target="_blank" rel="noopener noreferrer">
                        关于更多
                      </a> */}
                    </Menu.Item>
                    {/* <Menu.Item key="shuru" className="search-control">
                      <div>
                            <Search
                              placeholder="输入的电影"
                              enterButton
                              onSearch={(value) => console.log(value)}
                              
                              style={{ width: 300, float: "right",inlineHeight:"45.6", }}
                            />
                      </div>
                      </Menu.Item> */}
                      {/* <div>dadsad1d1</div> */}
                    {/* //判断 */}
                    {this.state.isuser &&user.VipName!=null ? (

                      <SubMenu
                          title={"VIP用户: "+user.VipName}
                          style={{ width: 200, float: "right" }}
                        >
                          <Menu.Item key="myMenu">我的账单</Menu.Item>
                          <Menu.Item key="cancel">注销</Menu.Item>
                        </SubMenu>
                     
                  
                    ) : (
                   
                        <SubMenu
                          title="用户登录"
                          style={{ width: 200, float: "right" }}
                        >
                          <Menu.Item key="login">登录</Menu.Item>
                          <Menu.Item key="register">注册</Menu.Item>
                        </SubMenu>
                  
                    )}
                  </Menu>
                </Affix>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
