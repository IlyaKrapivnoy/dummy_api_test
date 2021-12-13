import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles({
    cards: {
        margin: '90px 0 50px',
    },
});

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <Header />
            <div className={classes.cards}>{children}</div>
        </div>
    );
};

export default Layout;
