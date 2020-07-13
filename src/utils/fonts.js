import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'PokemonBadges',
  'pokemon_badges.ttf'
);

export default Icon;
