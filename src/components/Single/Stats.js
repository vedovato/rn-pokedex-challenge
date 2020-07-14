import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { THEME } from '../../utils/theme';
import ProgressBar from '../ProgressBar';
import Text from '../Text';

const PokemonStats = ({ name, type }) => {
  const { stats } = useSelector(state => state.pokemons[name]);

  const STATS = [
    ...stats,
    {
      // dynamically add last item :)
      stat: { name: 'Total' },
      base_stat: stats.reduce((a, i) => (a += i.base_stat), 0),
      sum: true,
    },
  ];

  const DICT = {
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Text stat color={THEME[type].badge} mb={20}>
        Base Stats
      </Text>

      {STATS.map((item, key) => (
        <StatWrapper key={key}>
          <Text
            bold
            capitalize
            fs={12}
            color="#17171B"
            style={{ width: '22%' }}>
            {DICT[item.stat.name] ?? item.stat.name}
          </Text>

          <Text color="#747476" fs={16} mr={20} style={styles.stat}>
            {item.base_stat}
          </Text>

          {!item.sum && (
            <ProgressBar value={item.base_stat} color={THEME[type].badge} />
          )}
        </StatWrapper>
      ))}
    </ScrollView>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
  stat: { width: 30, textAlign: 'right' },
};

const StatWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export default React.memo(PokemonStats);
