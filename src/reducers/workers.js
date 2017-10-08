const WORKERS_PER_SECOND = 0.1

export default (state = { idle: 10, wood: 0 }, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                idle: state.idle + action.dt / 1000 * WORKERS_PER_SECOND,
            }
        case 'ADD_WORKER':
            return {
                ...state,
                idle: state.idle - 1,
                [action.resource]: state[action.resource] + 1,
            }
        case 'REMOVE_WORKER':
            return {
                ...state,
                idle: state.idle + 1,
                [action.resource]: state[action.resource] - 1,
            }
        default:
            return state
    }
}
