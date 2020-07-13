import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const ProgressBar = props => (
  <Wrapper>
    <Progress {...props} />
  </Wrapper>
);

const Wrapper = styled(View)`
  border-radius: 2px;
  background: blue;
  width: 100%;
  height: 4px;
`;

const Progress = styled(View)`
  width: ${props => props.value}%;
  border-radius: 20px;
  background: yellow;
  height: 100%;
`;

export default ProgressBar;
