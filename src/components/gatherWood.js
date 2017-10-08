import React, { Component } from 'react'
import { connect } from 'react-redux'

class GatherWood extends Component {
    render() {
        const {
            woodWorkers,
            canAddWorkers,
            canRemoveWorkers,
            addWorker,
            removeWorker,
        } = this.props
        return (
            <p>
                Gather Wood: {woodWorkers}
                <button disabled={!canAddWorkers} onClick={addWorker}>
                    +
                </button>
                <button disabled={!canRemoveWorkers} onClick={removeWorker}>
                    -
                </button>
            </p>
        )
    }
}

const mapStateToProps = state => {
    const { workers } = state
    return {
        woodWorkers: workers.wood,
        canAddWorkers: workers.idle >= 1,
        canRemoveWorkers: workers.wood > 0,
    }
}

const mapDispatchToProps = dispatch => ({
    addWorker: () => {
        dispatch({ type: 'ADD_WORKER', resource: 'wood' })
    },
    removeWorker: () => {
        dispatch({ type: 'REMOVE_WORKER', resource: 'wood' })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(GatherWood)
