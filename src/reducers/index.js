import { combineReducers } from 'redux'

const GOLD_PER_SECOND = 1

const goldReducer = (state = 5, action) => {
    switch (action.type) {
        case 'TICK':
            return state + action.dt / 1000 * GOLD_PER_SECOND
        default:
            return state
    }
}

export default combineReducers({
    gold: goldReducer,
})
