import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const UsersLoader = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const APP_ID = '61b724480aaff9678bd56847';
        dispatch({ type: 'SET_LOADING', payload: true });
        axios
            .get('https://dummyapi.io/data/v1/user/?limit=16', {
                headers: {
                    'app-id': APP_ID,
                },
            })
            .then((response) => {
                dispatch({ type: 'SHOW_USERS', payload: response.data.data });
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    }, [dispatch]);
    return children;
};

export default UsersLoader;
