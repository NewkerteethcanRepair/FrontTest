import React from "react";

import {HashRouter as Router,Route} from "react-router-dom";
import Login from "../views/login"
import Register from "../views/register"
// import System from "../views/system"
import Home from "../views/home"
// import Todolistexam from "../views/todolistexam"
// import React from 'react'

export default function RootRouter() {
    return (
        <Router>
          <Route path="/" component={Home}></Route>  
          <Route path="/login" component={Login}></Route>  
        
          <Route path="/register" component={Register}></Route>  
         
        </Router>
    )
}
