import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import Badge from './Badge';
import Text from './Text';

const PokemonInfo = prop => {
  const { id, name, types } = useSelector(state => state?.pokemons[prop.name]);
  const NAME = { color: 'white', fs: 26, mb: 5, bold: true, capitalize: true };

  return (
    <View>
      <Text pokeId>#{String(id).padStart(3, '0')}</Text>
      <Text {...NAME}>{name}</Text>
      {types?.length && <Badge data={types} />}
    </View>
  );
};

export default PokemonInfo;
