import React from 'react'
import {HashRouter as Router,Route} from "react-router-dom";
import Home from "../view/home"

export default function rootRouter() {
    return (
        <Router>
            <Route path="/" component={Home} exact >

            </Route>
      

        </Router>
    )
}
