import { connect } from 'react-redux';
import MovieComponent from '../../components/MovieComponent';
import { fetchMoviesAction } from '../actions/Index';

const mapStatetoProps = (state) => {
    return {
        movies: state.movieReducers
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction())
        }
    }
};
const MovieContainer = connect(mapStatetoProps,mapDispatchToProps)(MovieComponent);
export default MovieContainer;
