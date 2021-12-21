import React, { useState } from 'react';
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
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    img: {
        objectFit: 'cover',
        minHeight: 200,
    },
    infoSection: {
        minHeight: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    likesAndDateSection: {
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
    },
});

const PostCard = ({ post }) => {
    const classes = useStyles();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const formattedDate = new Date(post.publishDate).toLocaleDateString(
        'en-US',
        options
    );

    const [like, setLike] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <Card>
            <CardActionArea component={RouterLink} to={`/post/${post.id}`}>
                <CardMedia
                    component="img"
                    height="100"
                    image={post.image}
                    className={classes.img}
                    alt="posts"
                />
            </CardActionArea>
            <CardContent className={classes.infoSection}>
                <Typography variant="body2">{post.text}</Typography>
                <div className={classes.likesAndDateSection}>
                    <Typography
                        variant="caption"
                        className={classes.likesSection}
                    >
                        {isLiked ? (
                            <FavoriteIcon
                                className={classes.likeIcon}
                                onClick={handleLike}
                            />
                        ) : (
                            <FavoriteBorderIcon
                                className={classes.likeIcon}
                                onClick={handleLike}
                            />
                        )}{' '}
                        {like}
                    </Typography>
                    <Typography variant="caption">{formattedDate}</Typography>
                </div>
            </CardContent>
        </Card>
    );
};

PostCard.propTypes = {
    options: PropTypes.shape({
        weekday: PropTypes.string,
        year: PropTypes.string,
        month: PropTypes.string,
        day: PropTypes.string,
    }),
    publishDate: PropTypes.string,
    post: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        likes: PropTypes.number,
        publishDate: PropTypes.string,
    }).isRequired,
};

const defaultProps = {
    publishDate: '',
    options: {},
};
PostCard.defaultProps = defaultProps;

export default PostCard;
