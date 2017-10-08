import React, { Component } from 'react'
import { connect } from 'react-redux'

class GoldComponent extends Component {
    render() {
        const { gold } = this.props
        return (
            <p>
                Gold {gold.toFixed(0)}
            </p>
        )
    }
}

const mapStateToProps = state => {
    return {
        gold: state.gold,
    }
}

export default connect(mapStateToProps)(GoldComponent)
