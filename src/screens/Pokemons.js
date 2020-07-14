import React from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector } from 'react-redux';

import PokemonList from '../components/PokemonList';
import NetworkError from '../components/Error';
import { THEME } from '../utils/theme';

const Index = ({ componentId }) => {
  const { root } = useSelector(state => state);

  Navigation.mergeOptions(componentId, {
    topBar: { visible: false },
  });

  return (
    <SafeAreaView>
      {root.hasError && <NetworkError cId={componentId} />}

      <PokemonList cId={componentId} />

      {root?.isLoading && (
        <View style={LOADING}>
          <ActivityIndicator size="large" color={THEME.fire.bg} />
        </View>
      )}
    </SafeAreaView>
  );
};

const LOADING = {
  width: '100%',
  justifyContent: 'center',
  backgroundColor: 'white',
};

export default Index;
