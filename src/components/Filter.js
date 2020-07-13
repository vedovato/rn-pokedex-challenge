import React, { useState } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

const FilterFlatList = () => {
  const [value, setValue] = useState('What Pokémon are you looking for?');

  return <StyledInput onChangeText={setValue} value={value} />;
};

const StyledInput = styled(TextInput)`
  border-radius: 10px;
  background: #f2f2f2;
  text-align: center;
  font-family: SF-Pro-Display-Regular;
  font-size: 16px;
  color: #747476;
  margin: 20px 0;
`;

export default FilterFlatList;
