import { FETCH_SUCEEDED, FETCH_FAILED, ADD_MOVIES } from "../actions/ActionTypes";

const movieReducers = ( movies = [], action) =>{
    switch (action.type) { 
        case FETCH_SUCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        case ADD_MOVIES:
            return [
                ...movies, action.newMovie
            ];
        default:
            return movies;
    }
}
export default movieReducers;