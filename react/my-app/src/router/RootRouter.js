import React from "react";

import {HashRouter as Router,Route} from "react-router-dom";
import Login from "../views/login"
import Register from "../views/register"
import System from "../views/system"
import Welcome from "../views/welcome"
// import Todolistexam from "../views/todolistexam"
// import React from 'react'

export default function RootRouter() {
    return (
        <Router>
          <Route path="/" component={Welcome} exact ></Route>  
          <Route path="/login" component={Login}></Route>  
          <Route path="/system" component={System}></Route>  
          <Route path="/register" component={Register}></Route>  
          {/* <Route path="/register " component={Register}></Route>  
          <Route path="/system " component={System}></Route>   */}
          {/* <Router path="/" component={Todolistexam}></Router> */}
        </Router>
    )
}
