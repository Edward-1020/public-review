import React, { Component } from 'react';
import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';
import FooterContainer from '../containers/FooterContainer';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'all'
        }
        this.nextTodoId = 0;
    }

    render() {
        const todos = this.getVisibleTodos();
        const {filter} = this.props;

        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <FooterContainer />
            </div>
        )
    }

    getVisibleTodos = () => {
        const currentFilter = this.state.filter;
        return this.state.todos.filter(item => {
            if (currentFilter === 'active') {
                return !item.completed;
            } else if (currentFilter === 'completed') {
                return item.completed;
            } else {
                return true;
            }
        })
    }

    addTodo = text => {
        const {todos} = this.state;
        const todo = {
            id: this.nextTodoId++,
            text,
            completed: false
        };
        const newTodos = [todo, todos];
        this.setState({
            todos: newTodos
        })
    }

    toggleTodo = id => {
        const newTodos = this.state.todos.map(item => {
            return item.id === id ? {
                ...item,
                completed: !item.completed } : item;
        });
        this.setState({
            todos: newTodos
        })
    }

    setVisibilityFilter = filter => {
        this.setState({
            filter
        })
    }
}
