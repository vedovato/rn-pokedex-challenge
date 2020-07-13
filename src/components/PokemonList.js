import React from 'react';
import { FlatList } from 'react-native';

import { THEME } from '../utils/theme';
import { pushScreen } from '../utils/navigation';
import ListHeader from './PokemonListHeader';
import ListItem from './PokemonListItem';

const PokemonList = ({ data, cId }) => {
  const _pushScreen = name => {
    const { type } = data[name].types[0];

    const statusBar = {
      backgroundColor: THEME[type.name].bg,
      style: 'light',
    };

    const topBar = {
      title: { text: name },
      drawBehind: true,
    };

    pushScreen({
      componentId: cId,
      name: 'pokedex.single',
      options: { statusBar, topBar },
      passProps: { name },
    });
  };

  return (
    <FlatList
      data={Object.keys(data)}
      keyExtractor={key => key}
      ListHeaderComponent={() => <ListHeader />}
      renderItem={({ item }) => (
        <ListItem
          data={data[item]}
          onPress={() => _pushScreen(data[item]?.name)}
          cId={cId}
        />
      )}
    />
  );
};

export default PokemonList;
