import React, { Component } from 'react'
import HomeView from "../components/home/home"
import MoviescinemaRouter from "../router/moviescinemaRouter"

export default class home extends Component {
    render() {
        return (
            <>
              <HomeView history={this.props.history}>
                  
              </HomeView> 
              <MoviescinemaRouter></MoviescinemaRouter>
            </>
        )
    }
}
