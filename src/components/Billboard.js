import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

import { THEME } from '../utils/theme';
import { Text } from 'react-native';

const Billboard = ({ name, blend }) => (
  <>
    <StyledText hue={340} len={name.length}>
      {name}
    </StyledText>

    <LinearGradient {...GRADIENT} colors={['transparent', THEME[blend].bg]} />
  </>
);

const GRADIENT = {
  locations: [0.0, 1.0],
  end: { x: 0.0, y: 1.0 },
  start: { x: 0.0, y: 0.0 },
  style: { height: 130, top: 5 },
  useViewFrame: false,
};

const StyledText = styled(Text)`
  left: ${({ len }) => (len % len ? '20' : '-10')}%;
  opacity: 0.3;
  text-transform: uppercase;
  position: absolute;
  font-weight: 700;
  font-size: 110px;
  width: 1000px;
  color: white;
`;

export default Billboard;
