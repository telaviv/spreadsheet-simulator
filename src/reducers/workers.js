const WORKERS_PER_SECOND = 0.1

export default (state = { idle: 10, wood: 0 }, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                idle: state.idle + action.dt / 1000 * WORKERS_PER_SECOND,
            }
        default:
            return state
    }
}
