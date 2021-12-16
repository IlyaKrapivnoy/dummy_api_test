import axios from '../axiosInstance';

export const READ_USER_PENDING = 'DUMMY_API_PROJECT/USER/READ_USER_PENDING';
export const READ_USER_SUCCEEDED = 'DUMMY_API_PROJECT/USER/READ_USER_SUCCEEDED';
export const READ_USER_FAILED = 'DUMMY_API_PROJECT/USER/READ_USER_FAILED';

const initialState = {
    data: [],
    isLoading: true,
    error: '',
};

// reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case READ_USER_PENDING:
        return { ...state, isLoading: true, error: '' };
    case READ_USER_SUCCEEDED:
        return { ...state, isLoading: false, data: action.payload };
    case READ_USER_FAILED:
        return { ...state, isLoading: false, error: action.payload };
    default:
        return state;
    }
};

// actions
export const readUser = (id) => async (dispatch) => {
    dispatch({ type: READ_USER_PENDING });
    try {
        const response = await axios.get(`user/${id}`);
        dispatch({ type: READ_USER_SUCCEEDED, payload: response.data });
    } catch (err) {
        dispatch({ type: READ_USER_FAILED, payload: err });
    }
};

// selectors
export const userSelector = (state) => state.user;

// reducer is exported by default
export default userReducer;
