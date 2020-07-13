import {
  INCREMENT,
  DECREMENT,
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_SINGLE,
} from './types';

const STATE = {
  counter: 40,

  root: {
    next: null,
    previous: null,
    isLoading: true,
  },

  pokemons: [],
};

const _mergeState = more => ({ ...STATE, ...more });

const counterReducer = (state = STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMON_LIST:
      return {
        ...state,

        root: { ...state?.root, ...action.payload.root },

        // FIXME: support to deep merge
        pokemons: action?.payload?.pokemons.reduce((acc, item) => {
          acc[item.name] = item;
          return acc;
        }, {}),
      };

    case FETCH_POKEMON_SINGLE:
      return {
        ...state,
        pokemons: {
          ...state?.pokemons,
          ...action.payload,
        },
      };

    case INCREMENT:
      return _mergeState({ counter: ++state.counter });

    case DECREMENT:
      return _mergeState({ counter: --state.counter });

    default:
      return state;
  }
};

export default counterReducer;
