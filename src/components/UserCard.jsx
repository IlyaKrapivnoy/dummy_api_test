import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 10px 10px',
    },
    media: {
        height: 80,
        width: 80,
        borderRadius: '50%',
    },
});

const UserCard = ({ user }) => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={user.picture}
                    title='Contemplative Reptile'
                />
                <CardContent>
                    <Typography variant='subtitle1'>
                        {user.firstName} {user.lastName}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default UserCard;
