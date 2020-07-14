import React from 'react';
import { ScrollView, Platform } from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

import { colors } from '../../utils/theme';
const SHARED = { fs: 16, color: colors.text };

const PokemonAbout = () => (
  <StyledScroll>
    <Text mb={15} mt={30} {...SHARED}>
      Pokem ipsum dolor sit amet Missingno Audino Zekrom Wartortle Shellder
      Vanillite. Thundershock Steel Victreebel Kirlia Tentacool Tail Whip
      Slugma.
    </Text>

    <Text mb={15} {...SHARED}>
      Vermilion City Tepig Flaaffy in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur Prinplup Shaymin Bill. Fire Aggron they're comfy and
      easy to wear what kind of Pokemon are you Milotic Nosepass Horsea.
    </Text>

    <Text mb={15} {...SHARED}>
      Rock Absol Linoone Teleport Keldeo Cascade Badge Gastly. Scratch Lickitung
      Rare Candy Ralts Arcanine Roselia Seaking. Thunder Badge Simisear Flygon
      Carnivine Groudon Arceus Musharna.
    </Text>

    <Text mb={15} {...SHARED}>
      Dig Wartortle Satoshi Tajiri Lopunny like no one ever was Togepi Shaymin.
      Wing Attack Kricketune Heatran Sewaddle Red Sudowoodo Emboar.
    </Text>

    <Text mb={30} {...SHARED}>
      Hoenn Ditto Koffing Grotle Exeggcute Haxorus Mineral Badge. Consectetur
      adipisicing elit Klink Nidorino Soul Badge Watchog Persian Snivy. Psychic
      Hitmonchan Teddiursa Gabite Clefable Yanma Venusaur.
    </Text>
  </StyledScroll>
);

const StyledScroll = styled(ScrollView)`
  padding: 0 30px;
  background: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: ${Platform.OS === 'ios' ? '30px' : 0};
  border-bottom-right-radius: ${Platform.OS === 'ios' ? '30px' : 0};
`;

export default React.memo(PokemonAbout);
