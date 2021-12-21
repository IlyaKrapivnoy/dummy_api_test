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

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    postInfo: {
        textAlign: 'center',
        fontSize: 12,
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
                    <Typography
                        variant="subtitle1"
                        className={classes.postInfo}
                    >
                        {post.likes}
                        {formattedDate}
                    </Typography>
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
