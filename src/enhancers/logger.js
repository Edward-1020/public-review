const logger = createStore => (...args) => {
    const store = createStore(...args);
    //  覆盖了原有的dispatch方法
    const dispatch = (action) => {
    }
    return {...store, dispatch}
}