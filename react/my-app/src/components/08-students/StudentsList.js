import React, { Component } from 'react'

export default class StudentsList extends Component {
    static defaultProps = {
        studentsData: []
    }
    render() {
        return (
            <div>
                <h2>学生列表</h2>
                <table>
                    <thead>
                        <tr>
                            <th>学生编号</th>
                            <th>学生姓名</th>
                            <th>学生年龄</th>
                            <th>学生性别</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.studentsData.map((item, index) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <button onClick={() => this.props.deleteOne(item._id)}>删除</button>
                                            <button onClick={() => this.props.getOne(item)}>修改</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
