import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input
                    value={this.props.text}
                    onChange={this.handleChange}/>
                <button
                    onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleClick = () => {
        this.props.addTodo(this.props.text);
    }

    handleChange = (e) => {
        this.props.setTodoText(e.target.value);
    }
}
