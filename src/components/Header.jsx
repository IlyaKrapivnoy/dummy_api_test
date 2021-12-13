import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        padding: 0,
        margin: 0,
    },
    title: {
        letterSpacing: 2,
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        USERS
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
