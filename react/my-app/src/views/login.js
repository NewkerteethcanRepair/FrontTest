import React from 'react'
import {Link} from "react-router-dom"
export default function login(props) {
    return (
        <div>
            <h1>登录</h1>
            <button onClick={()=>{
                props.history.push("/system")
            }}>确定登录</button>
            <Link to="/register">没有账号，去注册</Link>
        </div>
    )
}
