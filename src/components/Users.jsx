import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { readUsers, usersSelector } from '../store/usersDucks';
import Loader from './Loader';
import UserCard from './UserCard';

const Users = () => {
    const dispatch = useDispatch();
    const usersState = useSelector(usersSelector);
    const { data, isLoading, error } = usersState;

    useEffect(() => {
        dispatch(readUsers());
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!data.length) {
        return <div>There are no users</div>;
    }

    return (
        <Grid container spacing={3}>
            {data.map((user) => (
                <Grid item xs={12} sm={6} md={3} key={uuidv4()}>
                    <UserCard user={user} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Users;
