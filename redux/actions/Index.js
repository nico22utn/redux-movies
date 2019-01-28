import { FETCH_MOVIES, ADD_MOVIES, FETCH_SUCEEDED, FETCH_FAILED } from "./ActionTypes";

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}
export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIES,
        newMovie
    }
}
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCEEDED,
        receivedMovies
    }
}
export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}