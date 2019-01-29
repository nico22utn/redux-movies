import { FETCH_SUCEEDED, FETCH_FAILED, ADD_MOVIES, FETCH_MOVIES, UPDATE_MOVIE, UPDATE_SUCEEDED } from "../actions/ActionTypes";

const movieReducers = ( movies = [], action) =>{
    switch (action.type) { 
        case FETCH_SUCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIES:
        //     return [
        //         ...movies, action.newMovie
        //     ];
        // case UPDATE_MOVIE:
        //     return movies;
        case UPDATE_SUCEEDED:
            return movies.map(eachMovie => (eachMovie.id.toString() === action.updatedMovie.id) ?
                { ...eachMovie, name: action.updatedMovie.name,releaseYear: action.updatedMovie.releaseYear} : 
                eachMovie);
        default:
            return movies;
    }
}
export default movieReducers;