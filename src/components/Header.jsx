import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GroupIcon from '@material-ui/icons/Group';
import React from 'react';

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
  },
  title: {
    margin: '0 14px',
    letterSpacing: 2,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <GroupIcon />
          <Typography variant="h6" className={classes.title}>
            USERS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
