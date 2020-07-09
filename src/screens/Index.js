import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { pushScreen } from '../utils/navigation';
import * as actions from '../redux/actions';

const StyledButton = styled(TouchableOpacity)`
  margin: 20px;
  padding: 20px;
  background: tomato;
`;

const StyledText = styled(Text)`
  color: blue;
  text-align: center;
  font-weight: 700;
  font-size: 40px;
`;

const Index = ({ componentId, counter, increment, decrement }) => (
  <>
    <StyledButton onPress={() => pushScreen(componentId, 'pokedex.about')}>
      <Text>Hello, World</Text>
    </StyledButton>

    <StyledText>{counter}</StyledText>

    <View>
      <StyledButton onPress={increment}>
        <Text>+</Text>
      </StyledButton>

      <StyledButton onPress={decrement}>
        <Text>-</Text>
      </StyledButton>
    </View>
  </>
);

const mapStateToProps = ({ counter }) => ({
  counter,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
