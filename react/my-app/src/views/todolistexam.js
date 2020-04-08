import React, { Component } from "react";
import { Row, Col } from "antd";
import {NavLink} from "react-router-dom"
import TodolistexamRouter from "../router/TodolistexamRouter"
export default class Todolistexam extends Component {
  render() {
    return (
      <div>
        <h1>todolist</h1>
        {/* <Row>
          <Col span={12} offset={6}>
            <h1>todolist</h1>
            <NavLink activeClassName="" to="/display">todolist</NavLink>
            <TodolistexamRouter></TodolistexamRouter>

          </Col>
        </Row> */}
        
      </div>
    );
  }
}
