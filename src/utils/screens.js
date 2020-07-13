import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';

import About from '../screens/About';

import PokemonList from '../screens/Pokemons';
import PokemonSingle from '../screens/Pokemon';

const SCREENS = [
  { name: 'pokedex.about', Component: About },

  { name: 'pokedex.list', Component: PokemonList },
  { name: 'pokedex.single', Component: PokemonSingle },
];

const screens = () => {
  SCREENS.map(({ name, Component }) => {
    // const cb = props => <Component {...props} />;
    // Navigation.registerComponent(name, () => cb());
    Navigation.registerComponent(name, () => props => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ));
  });
};

export default screens;
