import React from 'react'
import {Route} from "react-router-dom";

// import Todolistexam from "../view/todolist/todolist"
import Main from "../components/main/main"
import Movieslist from "../components/movieslist/movieslist"
import Moviesdetail from "../components/moviesdetail/moviesdetail"
import Cinema from "../components/cinema/cinema"
import CinemaDetailandOrder from "../components/cinemaDetailandOrder/cinemaDetailandOrder"
export default function TodolistexamRouter() {
    return (
        <>
           <Route path="/main/index" component={Main}></Route> 
           <Route path="/main/movieslist"  component={Movieslist}></Route> 
           <Route path="/main/moviesdetail/:_id" component={Moviesdetail}></Route>
           <Route path="/main/cinema" component={Cinema}></Route>
           <Route path="/main/Cinemadetailandorder/:_id" component={CinemaDetailandOrder}></Route>

            
        </>
    )
}
