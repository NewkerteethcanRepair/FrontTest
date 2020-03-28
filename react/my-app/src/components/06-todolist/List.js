import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.listData.map(item => (
                        <li key={item.id} className={item.done ? 'done' : ''}
                            onClick={() => {
                                this.props.doneToggle(item.id);
                            }}
                        >
                            {item.text}
                        </li>
                    ))
                }
            </ul>
        )
    }
}
