import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { toggleLoader, displayUserInfo } from '../store/usersReducer';

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

    useEffect(() => {
        const APP_ID = '61b724480aaff9678bd56847';
        dispatch(toggleLoader(true));
        axios
            .get(`https://dummyapi.io/data/v1/user/${id}`, {
                headers: {
                    'app-id': APP_ID,
                },
            })
            .then((response) => {
                dispatch(displayUserInfo(response.data));
                dispatch(toggleLoader(false));
            });
    }, [dispatch, id]);

    const loading = useSelector((state) => state.loading);
    if (loading) {
        return <Loader />;
    }
    if (!Object.keys(user).length) {
        return <p>User not found</p>;
    }

    let userDataOfBirthFromAPI = `${user.dateOfBirth}`;
    let userDataOfBirth = new Date(userDataOfBirthFromAPI).toLocaleDateString();

    return (
        <div className={classes.userProfile}>
            <img src={user.picture} alt='user' className={classes.userPic} />
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Name:</span> {user.title}{' '}
                {user.firstName} {user.lastName}
            </Typography>
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Email:</span> {user.email}
            </Typography>
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>Date of Birth:</span>{' '}
                {userDataOfBirth}
            </Typography>
        </div>
    );
};;

export default UserInfo;
