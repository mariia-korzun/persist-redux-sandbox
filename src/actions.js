const incrementCount = () => {
    return {
        type: 'COUNT_INCREMENTED'
    }
}

const submitInput = (text) => {
    return {
        type: 'INPUT_SUBMITTED',
        payload: text
    }
}


export {
    incrementCount,
    submitInput
}