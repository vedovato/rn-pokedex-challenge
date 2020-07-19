import React, { useEffect } from 'react';
import { ScrollView, View, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FETCH_POKEMON_DATA } from '../../redux/types';
import { colors, THEME } from '../../utils/theme';
import Text from '../Text';

const PokemonAbilities = ({ name, type }) => {
  const { abilities } = useSelector(state => state.pokemons[name]);
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { name, abilities };
    dispatch({ type: FETCH_POKEMON_DATA, payload });
  }, [name]); // eslint-disable-line

  return (
    <Wrapper>
      <InnerWrapper>
        <Text stat capitalize color={THEME[type].badge} mb={20}>
          {`${name}'s Abilities`}
        </Text>

        {abilities.map((item, key) => (
          <Ability key={key}>
            <Text bold capitalize fs={14} color={colors.dark}>
              {item.name}
            </Text>

            <Text color={colors.text} fs={16}>
              {item.effect}
            </Text>
          </Ability>
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(ScrollView)`
  border-radius: 0;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: ${Platform.OS === 'ios' ? '30px' : 0};
  border-bottom-right-radius: ${Platform.OS === 'ios' ? '30px' : 0};
  background: white;
`;

const InnerWrapper = styled(View)`
  padding: 30px 30px 20px;
`;

const Ability = styled(View)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default React.memo(PokemonAbilities);
