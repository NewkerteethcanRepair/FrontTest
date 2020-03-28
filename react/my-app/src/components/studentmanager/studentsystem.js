import React, { Component } from "react";
import Studentlist from "./studentlist";
import Studentadd from "./studentadd";
import Studentupdate from "./studentupdate";
import Querystudent from "./queryStudents";

export default class studentsystem extends Component {
  state = {
    studentsdata: [
      { id: 1, name: "dengxaing", age: "23", sex: "男", class: "1班" },
      { id: 2, name: "dengdeng", age: "23", sex: "男", class: "1班" },
      { id: 3, name: "xapxoamg", age: "24", sex: "男", class: "1班" },
      { id: 4, name: "dreamMaster", age: "25", sex: "女", class: "1班" },
      { id: 5, name: "baomihuaupup", age: "26", sex: "男", class: "1班" }
    ],
    newId: 6,
    updatedata: {},
    condition: { type: 'name', value: '' },
  };
  studentdelete = id => {
    const studentsdata = this.state.studentsdata;
    this.setState({
      studentsdata: studentsdata.filter(item => item.id !== id)
    });
    // this.setState({
    //   studentsdata: studentsdata.map((item, index) => {
    //     if (item.id == id) {
    //       studentsdata.splice(index, 1);
    //       console.log("====================================");
    //       console.log(studentsdata);
    //       console.log("====================================");

    //     }
    //     // console.log(studentsdata);
    //     // console.log(item);

    //     return item;

    //   })
    // });
  };
  studentadd = d => {
    const studentsdata = this.state.studentsdata;
    console.log(d);
    console.log(this.state.newId);
    this.setState({
      studentsdata: [
        ...this.state.studentsdata,
        {
          id: this.state.newId,
          name: d.get("name"),
          age: d.get("age"),
          sex: d.get("sex"),
          class: d.get("class")

          // done: false
        }
      ],
      newId: this.state.newId + 1
    });
    console.log(this.state.newId);

    console.log(studentsdata);
  };
  studentupdate = student => {
    this.setState({
      studentsdata: this.state.studentsdata.map(item => {
        if (item.id === student.id) {
          return student;
        }
        return item;
      })
    });
  };

  getupdate = getid => {
    const studentsdata = this.state.studentsdata;
    studentsdata.map((item, index) => {
      if (getid == item.id) {
        console.log(item);

        this.setState({
          updatedata: item
        });
        return item;
      }
    });

  
  };
  querystudent = condition => {
    // const studentsdata = this.state.studentsdata;
    // studentsdata.map((item,index)=>{
    //   if(item.)
    // })
    console.log(condition.condition.type);
    // console.log(condition.type);
    // console.log(condition.value);
    
    this.setState({
        condition:{
          type:condition.condition.type,
          value:condition.condition.value
        }
      
    });
    console.log(this.state.condition);
  };
  filterData() {
    const { studentsdata, condition } = this.state;
    console.log(condition.type,condition.value);
    console.log(condition);
    
    return studentsdata.filter(item => 
     
        
      item[condition.type].includes(condition.value)
      
     
      
    
      
    ) 
}
  render() {
    return (
      <>
        <Studentlist
          studentsdata={this.filterData()}
          studentdelete={this.studentdelete}
          getupdate={this.getupdate}
        ></Studentlist>
        <Studentadd studentadd={this.studentadd}></Studentadd>
        <Studentupdate
          studentupdate={this.studentupdate}
          updatedata={this.state.updatedata}
        ></Studentupdate>
        <Querystudent querystudent={this.querystudent}></Querystudent>
      </>
    );
  }
}
