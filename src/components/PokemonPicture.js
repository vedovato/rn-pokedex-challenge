import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

const PokemonPicture = ({ id }) => {
  const uri = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  return <StyledImage source={{ uri }} />;
};

const StyledImage = styled(Image)`
  resize-mode: cover;
  height: 125px;
  width: 125px;
`;

export default PokemonPicture;
