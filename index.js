import { Navigation } from 'react-native-navigation';
import { defaultStyling, startStackNavigation } from './src/utils/navigation';
import screens from './src/utils/screens';

screens();
defaultStyling();

Navigation.events().registerAppLaunchedListener(startStackNavigation);
