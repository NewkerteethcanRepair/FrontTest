import React from 'react'
import {Route} from "react-router-dom";
import Student from "../components/studentmanager/studentsystem"
import StudentList from "../components/studentmanager/studentlist"
import Addstudent from "../components/studentmanager/studentadd"
import Count from "../components/013-counter/counter"
// import Todolist from "../components/014-reduxtodolist/todolist"
import RealStudent from "../components/015-students/StudentsList"
import StudentTeacher from "../components/15-students/StudentsList"
import Todolistexam from "../components/todolistexam/Todolistexam"
export default function SystemRouter() {
    return (
        <>
           <Route path="/system/studentslist" component={StudentList}></Route> 
           <Route path="/system/studentadd" component={Addstudent}></Route> 
           <Route path="/system/student" component={Student}></Route> 
           <Route path="/system/Count" component={Count}></Route> 
           {/* <Route path="/system/todolist" component={Todolist}></Route>  */}
           <Route path="/system/RealStudent" component={RealStudent}></Route> 
           <Route path="/system/studentteacher" component={StudentTeacher}></Route> 
           <Route path="/system/studentteacher" component={StudentTeacher}></Route> 
           <Route path="/system/todolist" component={Todolistexam}></Route> 

        </>
    )
}
