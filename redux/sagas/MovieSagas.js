import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
import { FETCH_SUCEEDED, FETCH_FAILED, FETCH_MOVIES, ADD_MOVIES, UPDATE_MOVIE, UPDATE_SUCEEDED, DELETE_SUCEEDED, DELETE_MOVIE } from '../actions/ActionTypes';

function* fetchMovies(){
    try{
        const receivedMovies = yield Api.getMoviesFromApi();
        yield put ({
            type: FETCH_SUCEEDED, receivedMovies: receivedMovies
        });
    }
    catch(error){
        yield put ({ type: FETCH_FAILED, error});
    }
}
function* addNewMovie(action){
    try{
        const result= yield Api.insertNewMovieFromApi(action.newMovie);
        if ( result == true){
            yield put({
                type: FETCH_MOVIES, sort: 'desc'
            });
        }
    }
    catch (error){

    }
}
function* updateMovie(action){
    try{
        const result = yield Api.updatedMovieFromApi(action.updateMovie);
        if (result === true){
            yield put ({
                type: UPDATE_SUCEEDED, updateMovie: action.updateMovie
            });
        }
    }
    catch(error){

    }
}
function* deleteMovie(action){
    try{
        const result = yield Api.deletedItemFromApi(action.deleteMovieId);
        if (result === true){
            yield put ({
                type: DELETE_SUCEEDED,
                deleteMovieId: action.deleteMovieId
            });
        }
    }
    catch(error){

    }
}
export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
export function* watchAddMovie(){
    yield takeLatest(ADD_MOVIES, addNewMovie);
}
export function* watchUpdateMovie(){
    yield takeLatest(UPDATE_MOVIE,updateMovie);
}
export function* watchDeleteMovie(){
    yield takeLatest(DELETE_MOVIE,deleteMovie);
}