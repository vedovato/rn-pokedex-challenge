import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Index from '../screens/Index';
import About from '../screens/About';

const SCREENS = [
  { name: 'pokedex.index', Component: Index },
  { name: 'pokedex.about', Component: About },
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
