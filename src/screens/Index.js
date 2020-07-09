import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { pushScreen } from '../utils/navigation';

const StyledButton = styled(TouchableOpacity)`
  margin: 20px;
  padding: 20px;
  background: tomato;
`;

const Index = ({ componentId }) => (
  <View>
    <StyledButton onPress={() => pushScreen(componentId, 'pokedex.about')}>
      <Text>Hello, World</Text>
    </StyledButton>
  </View>
);

export default Index;
