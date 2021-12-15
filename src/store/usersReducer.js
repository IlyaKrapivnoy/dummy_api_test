import { GET_USERS, GET_USER_INFO, SET_LOADING } from './types';

const defaultState = {
  users: [],
  user: {},
  loading: false,
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };

    case GET_USER_INFO:
      return { ...state, user: action.payload };

    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export const toggleLoader = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const displayUserInfo = (payload) => ({
  type: GET_USER_INFO,
  payload,
});

export const displayUserList = (payload) => ({
  type: GET_USERS,
  payload,
});
