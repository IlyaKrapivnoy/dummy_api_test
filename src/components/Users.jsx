import { Container, Grid } from '@material-ui/core';
import UserCard from './UserCard';
import { useSelector } from 'react-redux';
// import { Route, Link, useHistory } from 'react-router-dom';

const Users = () => {
    const users = useSelector((state) => state.users);

    return (
        <Container>
            {console.log(users)}
            <Grid container spacing={3}>
                {users.map((user) => (
                    <Grid item xs={12} sm={6} md={3} key={user.id}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Users;
