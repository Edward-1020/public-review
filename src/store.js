import { createStore } from 'redux';
import rootReducer from './reducers';
import { addTodo, toogleTodo, setFilter, setTodoText } from './actions';

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
})