import React, { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  SafeAreaView,
  Dimensions,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import { THEME } from '../utils/theme';
import PokemonInfo from '../components/PokemonInfo';
import PokemonPicture from '../components/PokemonPicture';
import Text from '../components/Text';
import ProgressBar from '../components/ProgressBar';

import HEADER_PATTERN from '../assets/single-header-bg.png';
import CIRCLE from '../assets/single-header-circle.png';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Text>Hello, World</Text>
    <ProgressBar value={56} />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const PokemonSingle = props => {
  const { id, name, types } = useSelector(
    state => state?.pokemons[props.name ?? 'bulbasaur']
  );
  const TYPE = types[0]?.type?.name ?? 'default';

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const x = { position: 'absolute', left: '-50%', width: 1000 };

  return (
    <Wrapper type={TYPE}>
      <View style={styles.billboard}>
        <View style={styles.billboardInner}>
          <Text uppercase bold color="white" fs={110} style={x}>
            {name}
          </Text>
        </View>

        <Pattern source={HEADER_PATTERN} />

        <InfoWrapper>
          <ImageBackground source={CIRCLE} style={styles.circle}>
            <PokemonPicture id={id} />
          </ImageBackground>

          <PokemonInfo name={name} />
        </InfoWrapper>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Wrapper>
  );
};

const styles = {
  billboard: { height: 250, backgroundColor: 'green' },
  billboardInner: { opacity: 0.3 },
  circle: { width: 130, height: 130 },
  scene: { flex: 1 },
};

const Wrapper = styled(SafeAreaView)`
  background: ${({ type }) => THEME[type]?.bg};
  flex: 1;
`;

const InfoWrapper = styled(View)`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  align-self: center;
  position: absolute;
  bottom: 30px;
  width: 85%;
`;

const Pattern = styled(Image)`
  width: 35px;
  height: 65px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default PokemonSingle;
