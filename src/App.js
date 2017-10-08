import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Gold from './components/gold'

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
