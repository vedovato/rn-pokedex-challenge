import { all, call, put } from 'redux-saga/effects';
import { FETCH_POKEMON_LIST, FETCH_POKEMON_SINGLE } from './types';
import pokeApi from '../utils/api';

export function* fetchPokedexList() {
  const { results, ...rest } = yield call(pokeApi, 'pokemon', '?limit=10');

  yield put({
    type: FETCH_POKEMON_LIST,
    payload: {
      root: { ...rest, isLoading: false },
      pokemons: results,
    },
  });

  // FIXME: Move pokemon fetch logic to its own generator
  // FIXME: Parallelize calls so they feel more async (?)

  const _RAW = yield all(
    results.map(item => call(pokeApi, item?.url, '', true))
  );

  const _POKEMONS = _RAW.reduce((acc, item) => {
    const { id, name, stats, abilities, sprites, types } = item;
    const pokemon = { id, name, stats, abilities, sprites, types };

    acc.push({ [name]: pokemon });
    return acc;
  }, []);

  yield all(
    _POKEMONS.map(item => put({ type: FETCH_POKEMON_SINGLE, payload: item }))
  );
}

function* rootSaga() {
  yield all([call(fetchPokedexList)]);
}

export default rootSaga;
