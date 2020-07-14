import { all, call, put, takeEvery } from 'redux-saga/effects';
import pokeApi from '../utils/api';

import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_NEXT,
  UPDATE_POKEMON_DATA,
} from './types';

export function* fetchPokedexList(action) {
  const { results, ...rest } = yield call(pokeApi, action && action.payload);
  const pokemon = yield all(results.map(item => call(pokeApi, item.url)));

  // put basic pokemon info
  yield put({
    type: FETCH_POKEMON_LIST,
    payload: {
      root: { ...rest, isLoading: false },
      pokemons: results,
    },
  });

  //  put additional info to each pokemons
  yield put({
    type: UPDATE_POKEMON_DATA,
    payload: pokemon,
  });
}

export function* watchLoadMore() {
  yield takeEvery(FETCH_POKEMON_LIST_NEXT, fetchPokedexList);
}

function* rootSaga() {
  yield all([call(fetchPokedexList), call(watchLoadMore)]);
}

export default rootSaga;
