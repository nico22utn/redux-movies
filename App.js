import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieComponent from './components/MovieComponent';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './redux/reducers/Index';
import { Provider } from 'react-redux';
import MovieContainer from './redux/containers/MovieContainer';
import rootSaga from './redux/sagas/RootSagas';

const sagaMiddleware = createSagaMiddleware();
var store = createStore(allReducers,applyMiddleware(sagaMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <MovieContainer />
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);