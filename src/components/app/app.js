import React from 'react'

import Counter from '../counter'
import Form from '../form'
import Reset from '../reset'

import './app.css'

const App = () => {
    return (
        <div className="app">
            <Counter />
            <Form />
            <Reset />
        </div>)
}

export default App