import { Navigation } from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('pokedex.root', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'pokedex.root',
            },
          },
        ],
      },
    },
  });
});
