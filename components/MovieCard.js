// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import PlotModal from '../components/PlotModal';

const styles = (theme) => ({
    root: {
        maxWidth: 345,
        padding: theme.spacing(2)
    },
    cardContent: {
        marginLeft: '5px'
    },
    buttonActions: {
        margin: '5px',
        padding: '10px'
    },
    movieCardImage: {
        width: '100%',
        minHeight: '100%'
    },
    movieTitle: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const MovieCard = withStyles(styles)((props) => {
    // const classes = useStyles();
    const { classes } = props;
    const { movie } = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    var movieImg;
    if (movie.Poster === 'N/A') {
        movieImg = '/images/404-img.png';
    } else {
        movieImg = movie.Poster;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    max-height="300px"
                    image={movieImg}
                    width="100%"
                    className={classes.movieCardImage}
                />
                <CardContent className={classes.cardContent}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.movieTitle}
                    >
                        {movie.Title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Year Released: {movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button
                    size="small"
                    color="primary"
                    className={classes.buttonActions}
                    onClick={this.clickHandler}
                >
                    Learn More
                </Button> */}
                <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.buttonActions}
                    onClick={handleClickOpen}
                >
                    Open dialog
                </Button>
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                    >
                        {movie.Title}
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nobis quia animi atque culpa sapiente eos illo
                            quaerat ratione sint labore nihil, distinctio vero
                            quam earum quae quis optio laboriosam veritatis!
                            {console.log(movie)}
                        </Typography>
                    </DialogContent>
                </Dialog>
            </CardActions>
        </Card>
    );
});

export default MovieCard;
