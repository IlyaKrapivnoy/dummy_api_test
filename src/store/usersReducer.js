import { SHOW_USERS, SHOW_USER_INFO, SET_LOADING } from './types';

const defaultState = {
    users: [],
    user: {},
    loading: false,
};

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_USERS:
            return { ...state, users: state.users.concat(action.payload) };

        case SHOW_USER_INFO:
            return { ...state, user: action.payload };

        case SET_LOADING:
            return { ...state, loading: action.payload };

        default:
            return state;
    }
};
