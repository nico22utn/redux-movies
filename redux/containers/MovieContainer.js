import { connect } from 'react-redux';
import MovieComponent from '../../components/MovieComponent';
import { fetchMoviesAction, addMovieAction, updateItemAction, deleteItemAction } from '../actions/Index';

const mapStatetoProps = (state) => {
    return {
        movies: state.movieReducers
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: () => {
            dispatch(fetchMoviesAction())
        },
        onAddMovie: (newMovie) =>{
            dispatch(addMovieAction(newMovie))
        },
        onUpdateItemAction: (updatedMovie) => {
            dispatch(updateItemAction(updatedMovie));
        },
        onDeleteItemAction: (deleteMovieId) => {
            dispatch(deleteItemAction(deleteMovieId));
        }
    }
};
const MovieContainer = connect(mapStatetoProps,mapDispatchToProps)(MovieComponent);
export default MovieContainer;
