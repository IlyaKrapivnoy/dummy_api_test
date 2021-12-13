import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

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

const Users = () => {
    const classes = useStyles();

    useEffect(() => {
        const APP_ID = '61b724480aaff9678bd56847';
        axios
            .get('https://dummyapi.io/data/v1/user/', {
                headers: {
                    'app-id': APP_ID,
                },
            })
            .then(function (response) {
                setGetUsers(response.data.data);
            });
    }, []);

    const [getUsers, setGetUsers] = useState([]);

    return (
        <>
            {console.log(getUsers)}
            {getUsers.map((user) => (
                <Card className={classes.root} key={user.id}>
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
            ))}
        </>
    );
};

export default Users;
