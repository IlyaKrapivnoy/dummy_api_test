import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import UserCard from './UserCard';

const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <Container>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={3} key={uuidv4()}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Users;
