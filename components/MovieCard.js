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
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const styles = (theme) => ({
    root: {
        maxWidth: 345,
        padding: theme.spacing(2)
    },
    cardContent: {
        marginTop: '10px'
    },
    buttonActions: {
        margin: '5px',
        padding: '8px 20px',
        color: '#fff',
        backgroundColor: '#ee6e73',
        '&:hover': {
            background: '#e83940'
        }
    },
    movieCardImage: {
        width: '100%',
        height: '400px',
        overflow: 'hidden'
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
    },
    progress: {
        marginLeft: '10px',
        marginTop: '10px'
    },
    dialogTitle: {
        marginRight: '50px',
        marginLeft: '0px'
    },
    dialogContent: {
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '25px',
        lineHeight: '1.75'
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
    const { classes } = props;
    const { movie } = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        moviePlot();
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

    var moviePlot = async function () {
        setTimeout(() => {
            axios
                .get(
                    'http://www.omdbapi.com/?apikey=50f7c729&t=' +
                        movie.Title +
                        '&plot=full'
                )
                .then((res) => {
                    let output = `
                <Typography gutterBottom className={classes.modalText}>${res.data.Plot}</Typography>
            `;

                    document.getElementById('plotModal').innerHTML = output;
                });
        }, 1000);
    };
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
                <Button
                    size="small"
                    className={classes.buttonActions}
                    onClick={handleClickOpen}
                >
                    Full Plot
                </Button>
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                        className={classes.dialogTitle}
                    >
                        {movie.Title}
                    </DialogTitle>
                    <DialogContent
                        dividers
                        id="plotModal"
                        className={classes.dialogContent}
                    >
                        <CircularProgress
                            color="secondary"
                            margin="10px auto"
                            className={classes.progress}
                        />
                    </DialogContent>
                </Dialog>
            </CardActions>
        </Card>
    );
});

export default MovieCard;
