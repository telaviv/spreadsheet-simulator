import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import './App.css'
import store from './store'

class GoldComponent extends Component {
    render() {
        const { gold } = this.props
        return (
            <p>
                Gold {gold}
            </p>
        )
    }
}

const mapStateToProps = state => {
    return {
        gold: state.gold,
    }
}

const Gold = connect(mapStateToProps)(GoldComponent)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Gold />
                </div>
            </Provider>
        )
    }
}

export default App
