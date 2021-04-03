import React from 'react'
import { connect } from 'react-redux'
import { submitInput } from '../../actions'

import './form.css'

const Form = ({ inputText, onSubmit }) => {
    return (
        <div className="form">
            <form onSubmit={(event) => {
                event.preventDefault()
                onSubmit(event.target.value)
            }}>
                <label htmlFor="input">Enter your name</label>
                <input
                    onChange={({ target }) => onSubmit(target.value)}
                    value={inputText}
                    name="input" />
            </form>
        </div>
    )
}

const mapStatetoProps = ({ inputText }) => {
    return { inputText }
}


export default connect(mapStatetoProps, { onSubmit: submitInput })(Form)