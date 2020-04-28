import React, { PureComponent } from 'react'
import Login from "../components/loginandregister/login"
export default class login extends PureComponent {
    render() {
        return (
            <>
                <Login history={this.props.history}></Login>
            </>
        )
    }
}
