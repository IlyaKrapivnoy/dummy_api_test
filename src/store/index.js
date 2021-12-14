import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from './usersReducer';

export const store = createStore(usersReducer, composeWithDevTools());
