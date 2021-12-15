import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import axios from '../axiosInstance';
import { displayUserList, toggleLoader } from '../store/usersReducer';

const UsersLoader = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleLoader(true));
        axios.get('/user/?limit=16').then((response) => {
            dispatch(displayUserList(response.data.data));
            dispatch(toggleLoader(false));
        });
    }, [dispatch]);
    return children;
};

export default UsersLoader;
