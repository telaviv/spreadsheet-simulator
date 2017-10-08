import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import GatherWood from './components/gatherWood'
import Resources from './components/resources'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <GatherWood />
                    <Resources />
                </div>
            </Provider>
        )
    }
}

export default App
