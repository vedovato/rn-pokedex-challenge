import React from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';

import PokemonList from '../components/PokemonList';
import { THEME } from '../utils/theme';

const Index = ({ componentId }) => {
  const { root } = useSelector(state => state);

  Navigation.mergeOptions(componentId, {
    topBar: { visible: false },
  });

  return (
    <SafeAreaView>
      <PokemonList cId={componentId} />

      {root?.isLoading && (
        <View style={{ width: '100%', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color={THEME.fire.bg} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Index;
