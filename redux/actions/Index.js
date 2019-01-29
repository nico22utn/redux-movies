import { FETCH_MOVIES, ADD_MOVIES, FETCH_SUCEEDED, FETCH_FAILED, UPDATE_MOVIE, UPDATE_SUCEEDED } from "./ActionTypes";

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
export const updateItemAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}
export const updateItemSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_SUCEEDED,
        updatedMovie
    }
}