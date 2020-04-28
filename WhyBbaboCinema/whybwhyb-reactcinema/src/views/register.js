import React, { PureComponent } from 'react'
import Registerview from "../components/loginandregister/register"
export default class register extends PureComponent {
    render() {
        return (
            <>
                <Registerview history={this.props.history}></Registerview>
            </>
        )
    }
}