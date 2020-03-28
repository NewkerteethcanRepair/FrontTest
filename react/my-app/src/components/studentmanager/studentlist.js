import React, { Component } from "react";

export default class studentlist extends Component {

  static defaultProps={
    studentsData:[]
  }
  //  studentdelete(id){
  //   this.props.studentsdata.map((item,index)=>{
  //     if(id==item.id){
  //       console.log('====================================');
  //       console.log("sdasd");
  //       console.log('====================================');
  //       this.props.studentsdata.splice(index,1);
  //       console.log('====================================');
  //       console.log(this.props.studentsdata);
  //       console.log('====================================');
  //       // let d= this.props.stydent
  //       // console.log('====================================');
  //       // console.log(this.props);
  //       // console.log('====================================');
  //       return this.props.studentsdata
  //   }
  //   });
  //   // return [...this.props.studentsdata]
  // }
  render() {
    return (
      <div>
        <table className="layui-table" lay-skin="row">
          <thead>
            <tr>
              <th>学生</th>
              <th>年龄</th>
              <th>性别</th>
              <th>班级</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.props.studentsdata.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.sex}</td>
                  <td>{item.class}</td>
                  <td><button className="layui-btn layui-btn-warm" onClick={
                    ()=>{

                    this.props.studentdelete(item.id)}
                    }
                    
                    >删除</button>
                    <button className="layui-btn " onClick={()=>{
                      this.props.getupdate(item.id)
                    }}>修改</button>
                    </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>
    );
  }
}
