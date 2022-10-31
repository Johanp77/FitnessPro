import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducers } from "../reducers/authReducers";
import { firebaseReducers } from "../reducers/firebaseReducers";
import { storeReducers } from "../reducers/storeReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    authReducers,
    firebaseReducers,
    storeReducers
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    );
    store.subscribe(() => {
        // persist your state
      })