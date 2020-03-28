import React, { Component } from 'react'
import AddStudents from "./AddStudents.js"
import UpdateStudents from "./UpdateStudents.js"
import QueryStudents from "./QueryStudents.js"
import StudentsList from "./StudentsList.js"

export default class Students extends Component {
    state = {
        studentsData: [
            { _id: 0, name: '张三', age: '23', gender: '男' },
            { _id: 1, name: '李四', age: '20', gender: '女' },
            { _id: 2, name: '王武', age: '18', gender: '男' }
        ],
        new_id: 3,
        condition: { type: 'name', value: '' },
        student: {}
    }

    deleteOne = _id => {
        const { studentsData } = this.state;
        this.setState({
            studentsData: studentsData.filter(item => item._id !== _id)
        })
    }
    addOne = student => {
        this.setState({
            studentsData: [
                ...this.state.studentsData,
                {
                    _id: this.state.new_id,
                    ...student
                }
            ],
            new_id: this.state.new_id + 1
        })
    }
    // 获取查询条件
    queryCondition = condition => {
        this.setState({
            condition
        })
    }
    getOne = student => {
        this.setState({
            student
        })
    }

    filterData() {
        const { studentsData, condition } = this.state;
        return studentsData.filter(item => item[condition.type].includes(condition.value));
    }

    updateOne = student => {
        this.setState({
            studentsData: this.state.studentsData.map(item => {
                if (item._id === student._id) {
                    return student;
                }
                return item;
            })
        })
    }

    render() {
        return (
            <>
                <AddStudents addOne={this.addOne} />
                <UpdateStudents student={this.state.student} updateOne={this.updateOne} />
                <QueryStudents queryCondition={this.queryCondition} />
                <StudentsList
                    studentsData={this.filterData()}
                    deleteOne={this.deleteOne}
                    getOne={this.getOne} />
            </>
        )
    }
}
