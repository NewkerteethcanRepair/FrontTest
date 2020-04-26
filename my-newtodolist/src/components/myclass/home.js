import React, { PureComponent } from "react";
import { Menu } from "antd";
import {NavLink} from "react-router-dom"
import Todolist from "../../router/todolist"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
export default class home extends PureComponent {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    if(e.target)
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <MailOutlined />
            Home
          </Menu.Item>
          <Menu.Item key="app" >
            <AppstoreOutlined />
            {/* Navigation Two */}
          </Menu.Item>
          <SubMenu
            title={
              <>
                <SettingOutlined />
                我的实验项目
              </>
            }
          >
            <Menu.ItemGroup title="基础项目 ">
              <Menu.Item key="setting:1"><NavLink  to="/todolist">todolist</NavLink></Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="综合 ">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
        
        
        <Todolist></Todolist>
      </div>
    );
  }
}
