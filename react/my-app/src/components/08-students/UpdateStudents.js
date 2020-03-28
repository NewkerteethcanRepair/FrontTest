import React, { Component, createRef } from 'react'

export default class UpdateStudents extends Component {
    render() {
        const nameElement = createRef();
        const ageElement = createRef();
        const genderElement = createRef();

        const { student } = this.props;
        return (
            <div key={student._id}>
                <h2>修改学生</h2>
                <div>
                    <label>学生姓名：</label>
                    <input type="text" defaultValue={student.name} ref={nameElement}/>
                </div>
                <div>
                    <label>学生年龄：</label>
                    <input type="text" defaultValue={student.age} ref={ageElement}/>
                </div>
                <div>
                    <label>学生性别：</label>
                    <span>男</span>
                    <input type="radio" name="gender" defaultChecked={student.gender === '男'} ref={genderElement}/>
                    <span>女</span>
                    <input type="radio" name="gender" defaultChecked={student.gender === '女'}/>
                </div>
                <div>
                    <button onClick={() => {
                        this.props.updateOne({
                            _id: student._id,
                            name: nameElement.current.value,
                            age: ageElement.current.value,
                            gender: genderElement.current.checked ? '男' : '女'
                        })
                    }}>确认修改</button>
                </div>
            </div>
        )
    }
}
