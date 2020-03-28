import React, { Component } from 'react';
import AddTo from "./AddTo.js";
import List from "./List.js";
import Filter from "./Filter.js";

import "./todolist.css";

export default class TodoList extends Component {
    state = {
        listData: [
            { id: 0, text: 'HTML', done: false },
            { id: 1, text: 'CSS', done: true },
            { id: 2, text: 'JS', done: false }
        ],
        newId: 3,
        current: 'ALL'
    }

    addTodo = text => {
        this.setState({
            listData: [
                ...this.state.listData,
                {
                    id: this.state.newId,
                    text,
                    done: false
                }
            ],
            newId: this.state.newId + 1
        })
    }

    doneToggle = id => {
        const { listData } = this.state;
        this.setState({
            listData: listData.map(item => {
                if (item.id === id) {
                    item.done = !item.done;
                }
                return item;
            })
        })
    }

    currentToggle = current => {
        this.setState({
            current
        })
    }

    filterData() {
        const { listData, current } = this.state;
        switch(current) {
            case 'DONE': return listData.filter(item => item.done);
            case 'ACTIVE': return listData.filter(item => !item.done);
            default: return listData;
        }
    }

    total() {
        return this.state.listData.length;
    }

    doneTotal() {
        return this.state.listData.filter(item => item.done).length;
    }

    render() {
        return (
            <>
                <AddTo addTodo={this.addTodo}></AddTo>
                <List listData={this.filterData()} doneToggle={this.doneToggle}></List>
                <Filter 
                    current={this.state.current} 
                    currentToggle={this.currentToggle}
                    total={this.total()}
                    doneTotal={this.doneTotal()}
                ></Filter>
            </>
        )
    }
}




