import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

import PokemonInfo from './PokemonInfo';
import Picture from './PokemonPicture';

import { THEME } from '../utils/theme';
import PATTERN from '../assets/list-item-bg.png';

const PokemonListItem = ({ data, onPress }) => {
  const { id, name, types } = data;
  const TYPE = (types && types[0]?.type?.name) ?? 'default';
  const PIC = { position: 'absolute', right: 10, top: -20 };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Button type={TYPE}>
        <Pattern source={PATTERN} />

        {data && <PokemonInfo name={name} />}

        {id && (
          <View style={PIC}>
            <Picture id={id} />
          </View>
        )}
      </Button>
    </TouchableOpacity>
  );
};

const Button = styled(View)`
  background: ${({ type }) => THEME[type].bg};
  box-shadow: 4px 2px 2px rgba(0, 0, 0, 1);
  border-radius: 10px;
  elevation: 4;

  margin: 20px auto;
  padding: 20px;
  width: 90%;
`;

const Pattern = styled(Image)`
  resize-mode: contain;
  position: absolute;
  height: 115px;
  width: 85%;
  right: 0;
  top: 0;
`;

export default PokemonListItem;
