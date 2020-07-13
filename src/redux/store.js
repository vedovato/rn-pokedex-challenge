import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import pokemonReducer from './reducers';
import rootSagas from './sagas';

import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  pokemonReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export default store;
