import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Fetch from 'isomorphic-unfetch';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';
import MovieGallery from '../components/MovieGallery';
import axios from 'axios';

const styles = (theme) => ({
    headContainer: {
        margin: '45px auto',
        textAlign: 'center'
    },
    textField: {
        width: '70%',
        margin: '20px auto'
    },
    movieContainer: {
        maxWidth: '78%',
        margin: '10px auto 40px'
    }
});

class Index extends Component {
    state = {
        movieInput: '',
        movieArray: ''
    };

    handleChange = (e) => {
        console.log(e.target.value);
    };

    keyPress = (e, state) => {
        if (e.keyCode == 13) {
            this.setState({
                ...this.state,
                movieInput: e.target.value
            });
            setTimeout(() => {
                axios
                    .get(
                        'http://www.omdbapi.com/?apikey=50f7c729&s=' +
                            this.state.movieInput
                    )
                    .then((res) => {
                        var movieId = res.data.
                        var movieArray = res.data.Search;
                        this.setState({
                            ...this.state,
                            movieArray: movieArray
                        });
                    });
            }, 500);
        }
    };

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
                        label="Search movies"
                        margin="normal"
                        variant="outlined"
                        className={classes.textField}
                        onChange={this.handleChange}
                        onKeyDown={this.keyPress}
                    />
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
