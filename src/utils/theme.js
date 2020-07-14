import { Platform } from 'react-native';
const isIOS = Platform.OS === 'ios';

export const fonts = {
  SFRegular: isIOS ? 'SFProDisplay-Regular' : 'SF-Pro-Display-Regular',
  SFBold: isIOS ? 'SFProDisplay-Bold' : 'SF-Pro-Display-Bold',
};

export const colors = {
  dark: '#17171B',
  text: '#747476',
};

export const THEME = {
  default: { badge: '#c1c1c1', bg: '#c9c9c9' },
  bug: { badge: '#8CB330', bg: '#8BD674' },
  dark: { badge: '#58575F', bg: '#6F6E78' },
  dragon: { badge: '#0F6AC0', bg: '#7383B9' },
  electric: { badge: '#EED535', bg: '#F2CB55' },
  fairy: { badge: '#ED6EC7', bg: '#EBA8C3' },
  fighting: { badge: '#D04164', bg: '#EB4971' },
  fire: { badge: '#FD7D24', bg: '#FFA756' },
  flying: { badge: '#748FC9', bg: '#83A2E3' },
  ghost: { badge: '#556AAE', bg: '#8571BE' },
  grass: { badge: '#62B957', bg: '#8BBE8A' },
  ground: { badge: '#DD7748', bg: '#F78551' },
  ice: { badge: '#61CEC0', bg: '#91D8DF' },
  normal: { badge: '#9DA0AA', bg: '#B5B9C4' },
  poison: { badge: '#A552CC', bg: '#9F6E97' },
  psychic: { badge: '#EA5D60', bg: '#FF6568' },
  rock: { badge: '#BAAB82', bg: '#D4C294' },
  steel: { badge: '#417D9A', bg: '#4C91B3' },
  water: { badge: '#4A90DA', bg: '#58ABF6' },
};
