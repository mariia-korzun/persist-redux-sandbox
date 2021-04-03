import React from 'react'

import './reset.css'
import { persistor } from '../../store'


const Reset = () => {
    return (
        <div className="reset">
            <button onClick={persistor.purge}
            className="reset-button">
                RESET STORAGE
            </button>
        </div>
    )
}

export default Reset