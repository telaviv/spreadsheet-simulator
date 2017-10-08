import React, { Component } from 'react'
import { connect } from 'react-redux'

class Resources extends Component {
    render() {
        const { idleWorkers } = this.props
        return (
            <p>
                Idle Workers: {idleWorkers.toFixed(0)}
            </p>
        )
    }
}

const mapStateToProps = state => ({ idleWorkers: state.workers.idle })

export default connect(mapStateToProps)(Resources)
