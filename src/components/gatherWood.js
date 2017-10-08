import React, { Component } from 'react'

class GatherWood extends Component {
    render() {
        const wood = 0
        return (
            <p>
                Gather Wood: {wood}
                <button>+</button>
                <button>-</button>
            </p>
        )
    }
}

export default GatherWood
