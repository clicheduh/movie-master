// import Fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import MovieGallery from '../components/MovieGallery';

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        margin: '40px auto'
    },
    textField: {
        width: '70%',
        margin: '20px auto 50px'
    }
}));

const Index = () => {
    const classes = useStyles();
    return (
        <div className="mainDiv">
            <Navbar />
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" gutterBottom>
                    Search for any movie
                </Typography>
                <TextField
                    label="Search movies"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                />
                <MovieGallery />
            </Container>
        </div>
    );
};

export default Index;
