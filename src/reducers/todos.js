import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    SET_TODO_TEXT,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from './actionTypes';

let nextTodoId = 0;

const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data
})

const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        return fetch('./mock/todos.json').then(
            response => {
                response.json().then(data => {
                    dispatch(fetchTodosSuccess(data))
                })
            },
            error => {
                dispatch(fetchTodosFailure(error))
                console.log("An error occurred" + error)
            }
        )
    }
}

/**
 * 新增代办事项
 */
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

/**
 * 更改待办事项状态
 */
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

/**
 * 设置过滤状态
 */
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

/**
 * 设置新增待办事项的文本
 */
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
            ]
        case TOGGLE_TODO:
            return state.todos.map(todo => {
                return todo.id === action.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo;
            })
        default:
            return state;
    }
}

export default todos;