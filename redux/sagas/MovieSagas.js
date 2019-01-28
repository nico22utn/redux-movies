import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';
import { FETCH_SUCEEDED, FETCH_FAILED, FETCH_MOVIES } from '../actions/ActionTypes';

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
export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}