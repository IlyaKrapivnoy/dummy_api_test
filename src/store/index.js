import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userDucks';
import usersReducer from './usersDucks';

const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
});
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);
