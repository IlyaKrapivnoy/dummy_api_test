import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { readPosts, usersSelector } from '../store/postsDucks';
import Loader from './Loader';
import PostCard from './PostCard';

const Users = () => {
    const dispatch = useDispatch();
    const postsState = useSelector(usersSelector);
    const { data, isLoading, error } = postsState;

    useEffect(() => {
        dispatch(readPosts());
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!data.length) {
        return <div>There are no posts</div>;
    }

    return (
        <Grid container spacing={3}>
            {data.map((post) => (
                <Grid item xs={12} sm={6} md={3} key={uuidv4()}>
                    <PostCard post={post} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Users;
