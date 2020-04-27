import React, { Component } from 'react'


import Home from "../components/myclass/home.js"
import TodolistRouter from "../router/todolist.js"

export default class home extends Component {
    render() {
        return (
            <>
                <Home history="{this.props.history}"></Home>


                <TodolistRouter></TodolistRouter>
            </>
        )
    }
}
