import React from 'react'
import {Route} from "react-router-dom";

// import Todolistexam from "../view/todolist/todolist"
import Main from "../components/main/main"
import Movieslist from "../components/movieslist/movieslist"
export default function TodolistexamRouter() {
    return (
        <>
           <Route path="/main" component={Main}></Route> 
           <Route path="/Movieslist" component={Movieslist}></Route> 

            
        </>
    )
}
