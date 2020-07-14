import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import { Platform } from 'react-native';

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  Platform.OS === 'ios' ? 'icomoon' : 'PokemonBadges',
  'pokemon_badges.ttf'
);

export default Icon;
