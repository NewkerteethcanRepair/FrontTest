import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Router from "./router/RootRouter";
import { Provider } from "react-redux";
import store from "./store/store";
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';


moment.locale('zh-cn');
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
      {/* //提供访问权限 */}
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </>
  );
}

export default App;
