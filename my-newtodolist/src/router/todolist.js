import React from 'react'
import {Route} from "react-router-dom";

import Todolistexam from "../view/todolist/todolist"
export default function TodolistexamRouter() {
    return (
        <>
           <Route path="/todolist" component={Todolistexam}></Route> 

            
        </>
    )
}
