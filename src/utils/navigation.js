import { Navigation } from 'react-native-navigation';

export const defaultStyling = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: 'white',
      style: 'dark',
    },

    topBar: {
      background: { color: 'transparent' },
      title: { color: 'white', alignment: 'center' },
      backButton: { color: 'blue' },

      drawBehind: false,
      elevation: 0, // android
      noBorder: true, // ios
    },
  });
};

export const startStackNavigation = () => {
  const children = [{ component: { name: 'pokedex.list' } }];

  Navigation.setRoot({
    root: {
      stack: {
        children,
        options: {
          topBar: { visible: false },
        },
      },
    },
  });
};

export const pushScreen = props => {
  const { componentId, name, options, passProps } = props;
  Navigation.push(componentId, {
    component: { name, options, passProps },
  });
};
