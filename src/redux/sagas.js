import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import pokeApi from '../utils/api';

import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_NEXT,
  FETCH_POKEMON_DATA,
  UPDATE_POKEMON_SHALLOW_DATA,
  UPDATE_POKEMON_DEEP_DATA,
  NETWORK_FAIL,
} from './types';

export const getPokemon = state => state.pokemons;

export function* fetchPokedexList(action) {
  try {
    const { results, ...rest } = yield call(pokeApi, action && action.payload);
    const pokemon = yield all(results.map(item => call(pokeApi, item.url)));
    const root = { ...rest, isLoading: false, hasError: false };

    yield put({
      type: FETCH_POKEMON_LIST,
      payload: { root, pokemons: results },
    });

    yield put({
      type: UPDATE_POKEMON_SHALLOW_DATA,
      payload: pokemon,
    });
  } catch (e) {
    yield put({ type: NETWORK_FAIL });
  }
}

export function* fetchPokemonData(action) {
  try {
    const { name, abilities } = action.payload;

    const abilitiesRaw = yield all(
      abilities.map(item =>
        item.ability.url ? call(pokeApi, item.ability.url) : null
      )
    );

    const abilitesFiltered = abilitiesRaw.reduce((acc, item) => {
      acc.push({
        // new object with interesting data only
        name: item?.names[7].name, // english content
        effect: item?.effect_entries[1]?.effect, // english content
      });
      return acc;
    }, []);

    yield put({
      type: UPDATE_POKEMON_DEEP_DATA,
      payload: { name, abilities: abilitesFiltered },
    });
  } catch (e) {
    yield put({ type: NETWORK_FAIL });
  }
}

function* rootSaga() {
  yield all([
    call(fetchPokedexList),
    takeEvery(FETCH_POKEMON_LIST_NEXT, fetchPokedexList),
    takeLatest(FETCH_POKEMON_DATA, fetchPokemonData),
  ]);
}

export default rootSaga;
