import React from 'react'

export default function register(props) {
    return (
        <div>
            <h1>注册</h1>
            <button onClick={()=>{
                props.history.push("/login")
            }}>注册</button>

        </div>
    )
}
