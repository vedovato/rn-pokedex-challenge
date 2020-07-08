import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const App = () => (
  <SafeAreaView>
    {global.HermesInternal == null ? null : <Text>Engine: Hermes</Text>}

    <View>
      <Text>Pokédex Challenge</Text>
    </View>
  </SafeAreaView>
);

export default App;
