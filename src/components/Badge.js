import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { THEME } from '../utils/theme';
import Text from '../components/Text';
import Icon from '../utils/fonts';

const PokemonBadge = ({ data = [] }) => (
  <Wrapper>
    {data?.map(({ type: { name } }) => (
      <Badge key={name} type={name}>
        <BadgeIcon name={name} />
        <Text badge>{name}</Text>
      </Badge>
    ))}
  </Wrapper>
);

const Wrapper = styled(View)`
  flex-direction: row;
  display: flex;
`;

const Badge = styled(View)`
  flex-direction: row;
  align-items: center;
  background: ${({ type }) => THEME[type].badge};
  border-radius: 3px;
  margin-right: 5px;
  padding: 3px 5px;
`;

const BadgeIcon = styled(Icon)`
  width: auto;
  height: 15px;
  font-size: 15px;
  color: white;
`;

export default PokemonBadge;
