import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
