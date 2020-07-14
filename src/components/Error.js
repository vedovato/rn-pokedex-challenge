import React from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components';

import Text from './Text';
import { THEME } from '../utils/theme';

const SHARED = { center: true, bold: true, color: 'white', fs: 16 };
const COLOR = THEME.psychic.bg;

const NetworkError = ({ cId }) => {
  Navigation.mergeOptions(cId, {
    statusBar: { backgroundColor: COLOR },
  });

  return (
    <Notice>
      <Text {...SHARED}>Ops! Error while connecting to server...</Text>
      <Text {...SHARED}>Please, try again soon :)</Text>
    </Notice>
  );
};

const Notice = styled(View)`
  background: ${COLOR};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-align: center;
  padding: 15px 10px;
`;

export default NetworkError;
