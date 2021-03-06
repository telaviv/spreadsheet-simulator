import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import rootReducer from './reducers'

const animationFrame = () => {
    return new Promise(resolve => {
        window.requestAnimationFrame(resolve)
    })
}

function* tick() {
    let time = Date.now()
    while (true) {
        yield call(animationFrame)
        let newTime = Date.now()
        yield put({ type: 'TICK', dt: newTime - time })
        time = newTime
    }
}

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(tick)

export default store
