import React from 'react';
import { Navigation } from 'react-native-navigation';
import { SafeAreaView, View, Image, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Billboard from '../components/Billboard';
import PokemonInfo from '../components/PokemonInfo';
import PokemonPicture from '../components/PokemonPicture';
import PokeTabs from '../components/Single/Tabs';

import { THEME } from '../utils/theme';
import HEADER_PATTERN from '../assets/single-header-bg.png';
import CIRCLE from '../assets/single-header-circle.png';

const PokemonSingle = props => {
  const { id, name, types } = useSelector(state => state?.pokemons[props.name]);
  const TYPE = types[0]?.type?.name ?? 'default';

  Navigation.mergeOptions(props.componentId, {
    topBar: { visible: true },
    statusBar: {
      backgroundColor: THEME[TYPE].bg,
      style: 'light',
    },
  });

  return (
    <Wrapper type={TYPE}>
      <View style={styles.header}>
        <Billboard name={name} blend={TYPE} />
        <Pattern source={HEADER_PATTERN} />

        <InfoWrapper>
          <ImageBackground source={CIRCLE} style={styles.circle}>
            <PokemonPicture id={id} />
          </ImageBackground>

          <View style={styles.content}>
            <PokemonInfo name={name} />
          </View>
        </InfoWrapper>
      </View>

      <PokeTabs name={name} type={TYPE} />
    </Wrapper>
  );
};

const styles = {
  header: { height: 260 },
  circle: { width: 130, height: 130, marginLeft: 15 },
  content: { marginHorizontal: 20 },
  scene: { flex: 1 },
};

const Wrapper = styled(SafeAreaView)`
  background: ${props => THEME[props.type].bg};
  flex: 1;
`;

const InfoWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: center;
  position: absolute;
  bottom: 40px;
  width: 85%;
`;

const Pattern = styled(Image)`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: -40px;
  right: 0;
`;

export default PokemonSingle;
