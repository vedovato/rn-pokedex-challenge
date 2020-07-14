import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_POKEMON_LIST_NEXT } from '../redux/types';
import { pushScreen } from '../utils/navigation';

import ListItem from './PokemonListItem';
import ListHeader from './ListHeader';

const PokemonList = ({ cId }) => {
  const { root, pokemons } = useSelector(state => state);
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState('');

  const FILTER = Object.keys(pokemons).filter(name => {
    const pokemon = pokemons[name];

    return (
      pokemon?.name.includes(userInput.toLowerCase()) ||
      pokemon?.id === Number(userInput) ||
      userInput === ''
    );
  });

  const _pushScreen = name => {
    pushScreen({
      componentId: cId,
      name: 'pokedex.single',
      passProps: { name },
    });
  };

  const handleLoadMore = () => {
    dispatch({ type: FETCH_POKEMON_LIST_NEXT, payload: root?.next ?? null });
  };

  return (
    <FlatList
      data={FILTER}
      keyExtractor={key => key}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.3}
      ListHeaderComponent={
        <ListHeader setUserInput={setUserInput} userInput={userInput} />
      }
      renderItem={({ item }) => (
        <ListItem onPress={_pushScreen} data={pokemons[item]} cId={cId} />
      )}
    />
  );
};

export default PokemonList;
