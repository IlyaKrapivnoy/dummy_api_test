import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    users: [],
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return { ...state, users: state.users + action.payload };

        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
 