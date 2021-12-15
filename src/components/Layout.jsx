import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    main: {
        margin: '90px 0 50px',
    },
});

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <Header />
            <main className={classes.main}>{children}</main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
};

export default Layout;
