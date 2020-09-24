import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary
    },
    movieCard: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

const MovieGallery = (props) => {
    const classes = useStyles();
    const { movieArray } = props;
    var i,
        newMovieArray = [];

    movieArray.slice(0, 8);

    for (i = 0; i < movieArray.length; i++) {
        axios
            .get(
                'http://www.omdbapi.com/?apikey=50f7c729&i=' +
                    movieArray[i].imdbID
            )
            .then((res) => {
                newMovieArray.push(res.data);
                console.log(newMovieArray);
            });
    }
    const output = movieArray ? (
        movieArray.map((movie) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={Math.random()}>
                    <MovieCard className={classes.movieCard} movie={movie} />
                </Grid>
            );
        })
    ) : (
        <div>No movie available</div>
    );
    return (
        <div className="root">
            <Grid container spacing={4}>
                {output}
            </Grid>
        </div>
    );
};

export default MovieGallery;
