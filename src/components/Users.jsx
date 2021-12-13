import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import UserCard from './UserCard';
// import { Route, Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    cards: {
        margin: '90px 0 50px',
    },
});

const Users = () => {
    const classes = useStyles();

    useEffect(() => {
        const APP_ID = '61b724480aaff9678bd56847';
        axios
            .get('https://dummyapi.io/data/v1/user/?limit=16', {
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
        <Container>
            {console.log(getUsers)}
            <Grid container className={classes.cards} spacing={3}>
                {getUsers.map((user) => (
                    <Grid item xs={12} sm={6} md={3} key={user.id}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Users;
