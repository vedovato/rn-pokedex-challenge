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
  background: #f1f1f1;
  height: 4px;
  flex: 1;
`;

const Progress = styled(View)`
  width: ${props => props.value}%;
  background: ${props => props.color};
  border-radius: 20px;
  height: 100%;
`;

export default ProgressBar;
