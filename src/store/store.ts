import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { EventReducer } from "../reducers/eventReducer";
import thunk from 'redux-thunk'
import { CartReducer } from "../reducers/cartReducer";

const rootReducer = combineReducers({
    cart: CartReducer,
    data: EventReducer
})

const store = createStore( rootReducer, applyMiddleware(thunk));

export default store;