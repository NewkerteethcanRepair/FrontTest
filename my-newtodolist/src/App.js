import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Todolist from "./view/todolist/todolist"
// import Home from "./view/home"
import Router from "./router/rootRouter";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <div>sadsa</div> */}
      {/* <Todolist></Todolist>  */}


      {/* React-Redux 提供<Provider/>组件，
      能够使你的整个app访问到Redux store中的数据： */}
      <Provider store={store}>

      <Router></Router>
      
      </Provider>
    </>
  );
}

export default App;
