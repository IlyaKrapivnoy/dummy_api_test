import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './Loader';
import { postSelector, readPost } from '../store/postDucks';

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

const PostInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const postState = useSelector(postSelector);
    const { data, isLoading, error } = postState;

    const { id } = useParams();

    useEffect(() => {
        dispatch(readPost(id));
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{error}</div>;
    }
    if (!JSON.stringify(data) === '{}') {
        return <div>No posts found</div>;
    }

    return (
        <div className={classes.userProfile}>
            {/* <img src={data.picture} alt="post" className={classes.userPic} /> */}
            <Typography className={classes.infoLine}>
                {/* <span className={classes.titles}>Name:</span> {data.firstName}{' '} */}
                {/* {data.lastName} */}
            </Typography>
            <Typography className={classes.infoLine}>
                test
                {/* <span className={classes.titles}>Email:</span> {data.email} */}
            </Typography>
        </div>
    );
};

export default PostInfo;
