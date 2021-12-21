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
        maxHeight: 300,
        borderRadius: 10,
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
            {console.log(data)}

            <img src={data.image} alt="post" className={classes.userPic} />
            <Typography className={classes.infoLine}>
                <span className={classes.titles}>POST:</span> {data.text}{' '}
            </Typography>
            {data.tags && (
                <Typography className={classes.infoLine}>
                    <span className={classes.titles}>TAGS:</span>{' '}
                    {data.tags.join(', ')}
                </Typography>
            )}
            {data.link && (
                <Typography className={classes.infoLine}>
                    <span className={classes.titles}>LINK:</span>{' '}
                    <a href={data.link}>{data.firstName}</a>
                </Typography>
            )}
        </div>
    );
};

export default PostInfo;
