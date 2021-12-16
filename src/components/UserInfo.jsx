import React, { useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import axios from '../axiosInstance';
import { toggleLoader, readUsers } from '../store/usersDucks';
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

    const { id } = useParams();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    dispatch(getUser(id));

    // useEffect(() => {
    //     // dispatch(toggleLoader(true));
    //     axios.get(`/user/${id}`, {}).then((response) => {
    //         dispatch(readUsers(response.data));
    //         // dispatch(toggleLoader(false));
    //     });
    // }, [dispatch, id]);

    const loading = useSelector((state) => state.loading);
    if (loading) {
        return <Loader />;
    }
    if (!Object.keys(user).length) {
        return <p>User not found</p>;
    }

    const formattedDate = new Date(user.dateOfBirth).toLocaleDateString();

    return (
        <div className={classes.userProfile}>
            <img src={user.picture} alt="user" className={classes.userPic} />
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Name:</span>
                {' '}
                {user.firstName}
                {' '}
                {user.lastName}
            </Typography>
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Email:</span>
                {' '}
                {user.email}
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
