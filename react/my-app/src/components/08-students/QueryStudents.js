import React, { Component } from 'react'

export default class QueryStudents extends Component {
    state = {
        condition: {
            type: 'name',
            value: ''
        }
    }
    render() {
        const { condition } = this.state;
        return (
            <div>
                <h2>查询学生</h2>
                <label>查询类型：</label>
                <select value={condition.type} onChange={(e) => {
                    this.setState({
                        condition: {
                            ...condition,
                            type: e.target.value
                        }
                    })
                }}>
                    <option value="name">姓名</option>
                    <option value="age">年龄</option>
                    <option value="gender">性别</option>
                </select>
                <input type="text" value={condition.value} onChange={(e) => {
                    this.setState({
                        condition: {
                            ...condition,
                            value: e.target.value
                        }
                    })
                }} onBlur={() => this.props.queryCondition(this.state.condition)} />
            </div>
        )
    }
}
