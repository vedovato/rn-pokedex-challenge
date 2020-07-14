import { FETCH_POKEMON_LIST, UPDATE_POKEMON_DATA } from './types';

const STATE = {
  root: {
    next: null,
    previous: null,
    isLoading: true,
  },

  pokemons: {},
};

const merge = arg =>
  arg.reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
  }, {});

const pokemonReducer = (state = STATE, action) => {
  switch (action.type) {
    case FETCH_POKEMON_LIST:
      return {
        ...state,

        root: { ...state?.root, ...action.payload.root },

        pokemons: {
          ...state.pokemons,
          ...merge(action?.payload?.pokemons),
        },
      };

    case UPDATE_POKEMON_DATA:
      return {
        ...state,
        pokemons: { ...state.pokemons, ...merge(action?.payload) },
      };

    default:
      return state;
  }
};

export default pokemonReducer;
