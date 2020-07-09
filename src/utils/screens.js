import React from 'react';
import { Navigation } from 'react-native-navigation';

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
    Navigation.registerComponent(name, () => props => <Component {...props} />);
  });
};

export default screens;
