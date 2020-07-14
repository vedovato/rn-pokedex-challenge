import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';

import PokemonList from '../screens/Pokemons';
import PokemonSingle from '../screens/Pokemon';

const SCREENS = [
  { name: 'pokedex.list', Component: PokemonList },
  { name: 'pokedex.single', Component: PokemonSingle },
];

const screens = () => {
  SCREENS.map(({ name, Component }) =>
    Navigation.registerComponent(name, () => props => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ))
  );
};

export default screens;
