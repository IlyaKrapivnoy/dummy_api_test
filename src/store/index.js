import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userDucks';
import usersReducer from './usersDucks';

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
});
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
