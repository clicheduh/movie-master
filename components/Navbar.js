import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        textTransform: 'uppercase'
    },
    myStyle: {
        backgroundColor: '#ee6e73'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.myStyle}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MovieIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Movie-Master
                    </Typography>
                </Toolbar>

                <style jsx>{``}</style>
            </AppBar>
        </div>
    );
};

export default Navbar;
