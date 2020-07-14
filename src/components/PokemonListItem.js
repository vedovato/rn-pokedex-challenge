import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

import PokemonInfo from './PokemonInfo';
import Picture from './PokemonPicture';

import { THEME } from '../utils/theme';
import PATTERN from '../assets/list-item-bg.png';

const PIC = { position: 'absolute', right: 10, top: -20 };

class PokemonListItem extends React.PureComponent {
  render() {
    const { id, name, types } = this.props.data;
    const TYPE = (types && types[0]?.type?.name) ?? 'default';

    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(name)}
        style={{ backgroundColor: 'white' }}
        activeOpacity={1}>
        <Button type={TYPE}>
          <Pattern source={PATTERN} />

          {id && (
            <>
              <PokemonInfo name={name} />
              <View style={PIC}>
                <Picture id={id} />
              </View>
            </>
          )}
        </Button>
      </TouchableOpacity>
    );
  }
}

const Button = styled(View)`
  background: ${({ type }) => THEME[type].bg};
  border-radius: 10px;

  margin: 15px auto;
  padding: 20px;
  min-height: 125px;
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
