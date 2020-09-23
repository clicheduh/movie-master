import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const MovieGallery = () => {
    const classes = useStyles();
    return (
        <div className="root">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default MovieGallery;
