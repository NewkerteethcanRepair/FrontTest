import React, { Component } from 'react'

export default class Filter extends Component {
    state = {
        btnNames: ['ALL', 'DONE', 'ACTIVE']
    }
    render() {
        const { btnNames } = this.state;
        const { current, currentToggle, total, doneTotal } = this.props;
        const href = "#";
        return (
            <div className="btns">
                {
                    btnNames.map(item => {
                        if (item === current) {
                            return <span key={item}>{item}</span>
                        }
                        return <a href={href} key={item} onClick={() => {
                            currentToggle(item);
                        }}>{item}</a>
                    })
                }
                <span>{doneTotal} / {total}</span>
            </div>
        )
    }
}
