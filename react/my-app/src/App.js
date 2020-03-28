import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/01-components/01-function";
import Class from "./components/01-components/02-class";
import { Event, Click } from "./components/02-event/event";
import MyState from "./components/state/state";
import Homework01 from "./components/state/computedhomework";
import Todolist from "./components/state/todolist/todolistall";
import Formto from "./components/07-form/form";
import Student from "./components/studentmanager/studentsystem";
import Life from "./components/09-lifecycle/lifecycle";
import Computer from "./components/10-hook/counter";
import Customcounter from "./components/10-hook/Cucounter";
import Cart from "./components/cart20200325/cart";
import Router from "./router/RootRouter";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    // 类似于template
    // className="App"
    <>
      {/* <Todolist></Todolist> */}
      {/* <Formto> </Formto> */}
      {/* <h1>sdsadasd</h1>
    <Welcome name="xixixi"></Welcome>
    <h3></h3>
    <Class name="lisi"></Class>
    <Event></Event>
    <Click></Click>
    <MyState></MyState>
    <Homework01></Homework01> */}
      {/* <Cart></Cart> */}
      //提供访问权限
      <Provider store={store}>
        <Router></Router>
      </Provider>
      {/* <Student></Student> */}
      {/* <Student></Student> */}
      {/* <Life></Life> */}
      {/* <Computer></Computer> */}
      {/* <Customcounter></Customcounter> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
  );
}

export default App;
