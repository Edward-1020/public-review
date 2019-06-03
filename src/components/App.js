import React, { Component } from 'react'
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const todos = [
    {
        id: 1,
        text: '1',
        completed: true
    },
    {
        id: 2,
        text: '2',
        completed: true
    },
    {
        id: 3,
        text: '3',
        completed: true
    }
];

const filter = 'all';

export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList todos={todos}/>
                <Footer filter={filter}/>
            </div>
        )
    }
}
