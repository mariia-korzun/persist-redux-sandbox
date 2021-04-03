import React from 'react'
import { connect } from 'react-redux'
import { incrementCount } from '../../actions'


import './counter.css'

const Counter = ({ count, incrementCount }) => {
    return (
        <div className="count">
            <div onClick={incrementCount}
            className="count__indicator">
                {count}
            </div>
            <button onClick={incrementCount}>
                increment
            </button>
        </div>
    )
}

const mapStateToProps = ({ count }) => {
    return { count }
}


export default connect(mapStateToProps, { incrementCount })(Counter)