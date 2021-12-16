import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// import axios from '../axiosInstance';
import { readUser, userSelector } from '../store/userDucks';
import Loader from './Loader';

const useStyles = makeStyles({
    titles: {
        fontWeight: 800,
        textTransform: 'uppercase',
    },
    infoLine: {
        marginBottom: 10,
    },
    userProfile: {
        padding: '30px 60px',
        letterSpacing: 2,
    },
    userPic: {
        marginBottom: 30,
    },
});

const UserInfo = () => {
    const classes = useStyles();

    // const { id } = useParams();

    // const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    const { data, isLoading, error } = userState;
    console.log(userState);

    const { id } = useParams();
    console.log('useParams>>>', id);

    useEffect(() => {
        dispatch(readUser(id));
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!data.length) {
        return <div>There is no user</div>;
    }

    const loading = useSelector((state) => state.loading);
    if (loading) {
        return <Loader />;
    }
    if (!Object.keys(data).length) {
        return <p>User not found</p>;
    }

    const formattedDate = new Date(data.dateOfBirth).toLocaleDateString();

    return (
        <div className={classes.userProfile}>
            <img src={data.picture} alt="user" className={classes.userPic} />
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Name:</span>
                {' '}
                {data.firstName}
                {' '}
                {data.lastName}
            </Typography>
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Email:</span>
                {' '}
                {data.email}
            </Typography>
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Date of Birth:</span>
                {' '}
                {formattedDate}
            </Typography>
        </div>
    );
};

export default UserInfo;
