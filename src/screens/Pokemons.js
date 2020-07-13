import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import PokemonList from '../components/PokemonList';

const Index = ({ componentId }) => {
  const { root, pokemons } = useSelector(state => state);

  return (
    <SafeAreaView>
      {root?.isLoading && (
        <View style={{ backgroundColor: 'cyan' }}>
          <Text>Carregando</Text>
        </View>
      )}

      <PokemonList data={pokemons} cId={componentId} />
    </SafeAreaView>
  );
};

export default Index;
