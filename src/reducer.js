import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { REHYDRATE } from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['count']
}

const initialState = {
    count: 0,
    inputText: "your name"
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case REHYDRATE:
        //     return {
        //       ...state,
        //       currentUser: action.payload.currentUser 
        //     };
        case 'COUNT_INCREMENTED': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'INPUT_SUBMITTED': {
            return {
                ...state,
                inputText: action.payload
            }
        }

        default: {
            return state
        }
    }

}

export default persistReducer(persistConfig, reducer)