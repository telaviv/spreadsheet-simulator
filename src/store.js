import { createStore } from 'redux'

const store = createStore(
    store => store,
    { gold: 5 },
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
