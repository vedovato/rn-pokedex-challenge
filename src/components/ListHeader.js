import React from 'react';
import { ImageBackground, View } from 'react-native';
import styled from 'styled-components';

import Filter from './Filter';
import Text from './Text';

import HEADER_IMAGE from '../assets/home-bg.png';

const ListHeader = ({ setUserInput, userInput }) => (
  <StyledHeader source={HEADER_IMAGE} resizeMode="cover">
    <View style={{ marginHorizontal: 20 }}>
      <Text bold fs={32}>
        Pokédex
      </Text>

      <Text fs={16} color="#747476">
        Search for Pokémon by name or using the National Pokédex number.
      </Text>

      <Filter onChangeText={setUserInput} value={userInput} />
    </View>
  </StyledHeader>
);

const StyledHeader = styled(ImageBackground)`
  background: white;
  justify-content: flex-end;
  display: flex;
  height: 220px;
  width: 100%;
`;

export default ListHeader;
