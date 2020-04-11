import React from "react";

import {HashRouter as Router,Route} from "react-router-dom";

import Lottery from "../view/lottery";


export default function RootRouter (){
    return (

        <Router>
            <Route path='/' component={Lottery}></Route>
        </Router>
    )

}