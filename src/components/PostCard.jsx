import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
    postInfo: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 6,
    },
    likeIcon: {
        height: 16,
    },
    likesSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 40,
        fontSize: 13,
    },
    date: {
        fontSize: 13,
    },
});

const PostCard = ({ post }) => {
    const classes = useStyles();

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = new Date(post.publishDate).toLocaleDateString(
        'en-US',
        options
    );

    return (
        <Card>
            <CardActionArea component={RouterLink} to={`/post/${post.id}`}>
                <CardMedia
                    component="img"
                    height="100"
                    image={post.image}
                    style={{ objectFit: 'contain' }}
                    alt="posts"
                />
                <CardContent>
                    <Typography variant="subtitle1" className={classes.title}>
                        {post.text}
                    </Typography>
                    <div className={classes.postInfo}>
                        <Typography className={classes.likesSection}>
                            <FavoriteBorderIcon className={classes.likeIcon} />{' '}
                            {post.likes}
                        </Typography>
                        <Typography className={classes.date}>
                            {formattedDate}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

// PostCard.propTypes = {
//     post: PropTypes.shape({
//         id: PropTypes.string,
//         picture: PropTypes.string,
//         firstName: PropTypes.string,
//         lastName: PropTypes.string,
//     }).isRequired,
// };

// const defaultProps = {};
// PostCard.defaultProps = defaultProps;

export default PostCard;
