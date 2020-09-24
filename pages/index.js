import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Navbar from '../components/Navbar';
import MovieGallery from '../components/MovieGallery';
import axios from 'axios';

const styles = (theme) => ({
    headContainer: {
        margin: '45px auto 10px',
        textAlign: 'center'
    },
    titleField: {
        width: '40%',
        margin: '20px 10px'
    },
    yearField: {
        width: '15%',
        margin: '20px 10px'
    },
    movieContainer: {
        maxWidth: '78%',
        margin: '10px auto 40px'
    },
    btnContainer: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    buttonActions: {
        margin: '5px',
        padding: '8px 20px',
        color: '#fff',
        backgroundColor: '#ee6e73',
        '&:hover': {
            background: '#e83940'
        }
    }
});

class Index extends Component {
    state = {
        movieTitle: '',
        movieYear: '',
        movieArray: []
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
        setTimeout(() => {
            console.log(this.state);
        }, 500);
    };

    onSearch = () => {
        if (this.state.movieTitle && this.state.movieYear) {
            axios
                .get(
                    'http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' +
                        this.state.movieTitle +
                        '&y=' +
                        this.state.movieYear
                )
                .then((res) => {
                    var movieArray = res.data.Search;
                    if (movieArray) {
                        this.setState({
                            ...this.state,
                            movieArray: movieArray
                        });
                    } else {
                        alert('No series found!');
                    }
                });
        } else if (this.state.movieTitle && this.state.movieYear === '') {
            axios
                .get(
                    'http://www.omdbapi.com/?apikey=50f7c729&type=series&s=' +
                        this.state.movieTitle
                )
                .then((res) => {
                    var movieArray = res.data.Search;
                    this.setState({
                        ...this.state,
                        movieArray: movieArray
                    });
                });
        }
        // setTimeout(() => {
        //     this.setState({
        //         movieTitle: '',
        //         movieYear: '',
        //         movieArray: []
        //     });
        // }, 5000);
    };

    // setTimeout(() => {
    //     axios
    //         .get(
    //             'http://www.omdbapi.com/?apikey=50f7c729&s=' +
    //                 this.state.movieTitle +
    //                 '&type=series'
    //         )
    //         .then((res) => {
    //             var movieArray = res.data.Search;
    //             this.setState({
    //                 ...this.state,
    //                 movieArray: movieArray
    //             });
    //         });
    // }, 500);

    render() {
        const { classes } = this.props;
        return (
            <div className="mainDiv">
                <Navbar />
                <Container maxWidth="lg" className={classes.headContainer}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.mainHeading}
                    >
                        Search for any movie
                    </Typography>
                    <TextField
                        label="Movie Title"
                        name="movieTitle"
                        margin="normal"
                        className={classes.titleField}
                        onChange={this.handleChange}
                        color="secondary"
                    />
                    <TextField
                        label="Year"
                        name="movieYear"
                        margin="normal"
                        className={classes.yearField}
                        onChange={this.handleChange}
                        color="secondary"
                    />
                </Container>
                <Container className={classes.btnContainer}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.buttonActions}
                        startIcon={<SearchIcon />}
                        onClick={this.onSearch}
                    >
                        Search Series
                    </Button>
                </Container>
                <Container className={classes.movieContainer}>
                    <MovieGallery movieArray={this.state.movieArray} />
                </Container>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
