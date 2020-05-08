import React from 'react'
import {Route} from "react-router-dom";

// import Todolistexam from "../view/todolist/todolist"
import Main from "../components/main/main"
import Movieslist from "../components/movieslist/movieslist"
import Moviesdetail from "../components/moviesdetail/moviesdetail"
import Cinema from "../components/cinema/cinema"
import CinemaDetailandOrder from "../components/cinemaDetailandOrder/cinemaDetailandOrder"
import Orderesult from "../components/orderesult/orderesult"
import Mymenu from "../components/mymenu/mymenu"
import ScrollToTop from "../utils/ScrollToTop"
export default function TodolistexamRouter() {
    return (
        <>
         <ScrollToTop>
               <Route path="/main/index" component={Main}></Route> 
               <Route path="/main/movieslist"  component={Movieslist}></Route> 
               <Route path="/main/moviesdetail/:_id" component={Moviesdetail}></Route>
               <Route path="/main/cinema" component={Cinema}></Route>
               <Route path="/main/Cinemadetailandorder/:_id" component={CinemaDetailandOrder}></Route>
               <Route path="/main/orderesult/:_id" component={Orderesult}></Route>
               <Route path="/main/mymenu/:_id" component={Mymenu}></Route>

         </ScrollToTop>   
            
        </>
    )
}
