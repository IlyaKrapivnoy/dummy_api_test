import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';

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

export default Layout;
