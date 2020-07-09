import { Navigation } from 'react-native-navigation';

export const defaultStyling = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'cyan',
    },
    topBar: {
      backButton: { color: 'blue' },
      visible: false,
    },
  });
};

export const startStackNavigation = () => {
  const children = [{ component: { name: 'pokedex.index' } }];

  Navigation.setRoot({
    root: {
      stack: { children },
    },
  });
};

export const pushScreen = (cId, name, options = {}) => {
  Navigation.push(cId, {
    component: { name, options },
  });
};
