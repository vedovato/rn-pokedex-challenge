import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

import { colors, fonts } from '../utils/theme';

const FilterFlatList = ({ onChangeText, value }) => (
  <StyledInput
    placeholder="What Pokémon are you looking for?"
    onChangeText={onChangeText}
    value={value}
  />
);

const StyledInput = styled(TextInput)`
  font-family: ${fonts.SFRegular};
  font-size: 16px;
  background: #f2f2f2;
  padding: 15px;
  border-radius: 10px;
  color: ${colors.text};
  margin: 20px 0;
`;

export default FilterFlatList;
