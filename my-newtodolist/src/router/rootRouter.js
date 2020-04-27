import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../view/home";
import Todolistexam from "../components/todolist/todolist";
export default function RootRouter() {
  return (
    // exact是Route下的一个属性，
    // react路由会匹配到所有能匹配到的路由组件，
    // exact能够使得路由的匹配更严格一些。
    //    <Route path='/' component={Home} />
    //        <Route path='/page' component={Page}>
    //        这种情况下，如果匹配路由path='/page'，那么会把Home也会展示出来。
    //         // 比如加了后 就不会匹配除了

    <Router>
      <Route path="/" component={Home}></Route>
    </Router>
  );
}
