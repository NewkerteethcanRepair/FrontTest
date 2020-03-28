import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import SystemRouter from "../router/SystemRouter"
export default class system extends Component {
    render() {
        return (
            <div>
                <h1>管理系统</h1>
                <dl>
                    <dt>学生管理</dt>
                    <dd><NavLink activeClassName="mycolor" to="/system/studentlist">学生列表</NavLink></dd>
                    <dd><NavLink activeClassName="mycolor" to="/system/addstudent">添加信息</NavLink></dd>
                    <dd><NavLink activeClassName="mycolor" to="/system/student">学生总</NavLink></dd>
                    <dd><NavLink activeClassName="mycolor" to="/system/Count">计数器</NavLink></dd>
                    <dd><NavLink activeClassName="mycolor" to="/system/todolist">todolist</NavLink></dd>
                    <dd><NavLink activeClassName="mycolor" to="/system/RealStudent">RealStudent</NavLink></dd>
                    <dd><NavLink activeClassName="mycolor" to="/system/studentteacher">学生老师版</NavLink></dd>
                    {/* <Route path="/system/Count" component={Count}></Route>  */}

                </dl>
                <SystemRouter></SystemRouter>
            </div>
        )
    }
}
