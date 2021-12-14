import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displayUserList, toggleLoader } from '../store/usersReducer';

const UsersLoader = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const APP_ID = '61b724480aaff9678bd56847';
        dispatch(toggleLoader(true));
        axios
            .get('https://dummyapi.io/data/v1/user/?limit=16', {
                headers: {
                    'app-id': APP_ID,
                },
            })
            .then((response) => {
                dispatch(displayUserList(response.data.data));
                dispatch(toggleLoader(false));
            });
    }, [dispatch]);
    return children;
};

export default UsersLoader;
