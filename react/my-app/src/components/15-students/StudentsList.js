import React, { Component } from 'react'
import { connect } from "react-redux";
import { getStudentsByPageAsync, deleteByIdAsync } from "../../store/studentsData/actions.js";

class StudentsList extends Component {
    componentDidMount() {
        this.props.dispatch(getStudentsByPageAsync());
    }
    prevPage = () => {
        this.props.dispatch(getStudentsByPageAsync({
            currentPage: this.props.pageData.currentPage - 1,
            pageSize: this.props.pageData.pageSize
        }));
    }

    deleteOne = _id => {
        this.props.dispatch(deleteByIdAsync(_id));
    }
    render() {
        const { pageData } = this.props;
        return (
            <>
                <h2>学生列表</h2>
                <table>
                    <thead>
                        <tr>
                            <th>学生编号</th>
                            <th>学生姓名</th>
                            <th>学生年龄</th>
                            <th>学生性别</th>
                            <th>学生操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pageData.studentsData.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <button>修改</button>
                                        <button onClick={() => this.deleteOne(item._id)}>删除</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <button>首页</button>
                    <button onClick={this.prevPage}>上一页</button>
                    <button onClick={() => {
                        this.props.dispatch(getStudentsByPageAsync({
                            currentPage: pageData.currentPage - 0 + 1,
                            pageSize: pageData.pageSize
                        }));
                    }}>下一页</button>
                    <button>尾页</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({ pageData: state.pageData });

export default connect(mapStateToProps)(StudentsList);