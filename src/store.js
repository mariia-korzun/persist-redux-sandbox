import { createStore } from 'redux'
import { persistStore } from 'redux-persist'


import reducer from './reducer'

const store = createStore(reducer)
const persistor = persistStore(store)
export { store, persistor }