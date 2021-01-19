import { createStore,applyMiddleware,compose } from 'redux'
import ReduxThunk from "redux-thunk"
import placesReducer from "./placesReducer"

const store = createStore(placesReducer,compose(applyMiddleware(ReduxThunk),window.devToolsExtension ? window.devToolsExtension() : f => f))

export default store