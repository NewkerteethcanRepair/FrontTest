import React from 'react'
import {Route} from "react-router-dom";

import Todolistexam from "../components/todolistexam/Todolistexam"
export default function TodolistexamRouter() {
    return (
        <>
           <Route path="/display" component={Todolistexam}></Route> 

            
        </>
    )
}
