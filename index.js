import { Navigation } from 'react-native-navigation';
import { defaultStyling, startStackNavigation } from './src/utils/navigation';
import screens from './src/utils/screens';

screens();

Navigation.events().registerAppLaunchedListener(() => {
  startStackNavigation();
  defaultStyling();
});
