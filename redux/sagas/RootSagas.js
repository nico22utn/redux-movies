import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './MovieSagas';

export default function* rootSaga(){
    yield call(watchFetchMovies);
}