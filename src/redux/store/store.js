import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "../reducers/authReducers";
import { firebaseReducers } from "../reducers/firebaseReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    authReducers,
    firebaseReducers
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );