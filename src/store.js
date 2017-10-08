import { createStore } from 'redux'

const store = createStore(
    store => store,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
