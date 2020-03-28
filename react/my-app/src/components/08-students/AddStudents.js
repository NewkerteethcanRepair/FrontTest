import React, { Component } from 'react'

export default class AddStudents extends Component {
    state = {
        student: {
            name: '',
            age: '',
            gender: ''
        }
    }
    render() {
        const { student } = this.state;
        return (
            <div>
                <h2>新增学生</h2>
                <div>
                    <label>学生姓名：</label>
                    <input type="text" value={student.name} onChange={(event) => {
                        this.setState({
                            student: {
                                ...student,
                                name: event.target.value
                            }
                        })
                    }} />
                </div>
                <div>
                    <label>学生年龄：</label>
                    <input type="text" value={student.age} onChange={(event) => {
                        this.setState({
                            student: {
                                ...student,
                                age: event.target.value
                            }
                        }, () => {
                            console.log(this.state.student);
                        })
                    }}/>
                </div>
                <div>
                    <label>学生性别：</label>
                    <span>男</span>
                    <input type="radio" name="addGender" checked={student.gender === '男'} onChange={() => {
                        this.setState({
                            student: {
                                ...student,
                                gender: '男'
                            }
                        })
                    }}/>
                    <span>女</span>
                    <input type="radio" name="addGender" checked={student.gender === '女'} onChange={() => {
                        this.setState({
                            student: {
                                ...student,
                                gender: '女'
                            }
                        })
                    }}/>
                </div>
                <div>
                    <button onClick={() => this.props.addOne(this.state.student)}>确认新增</button>
                </div>
            </div>
        )
    }
}
