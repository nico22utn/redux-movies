import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies, watchAddMovie, watchUpdateMovie, watchDeleteMovie } from './MovieSagas';

export default function* rootSaga(){
    yield [
        fork(watchFetchMovies),
        fork(watchAddMovie),
        fork(watchUpdateMovie),
        fork(watchDeleteMovie)
    ];
}