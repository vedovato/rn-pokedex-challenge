import React, { useState } from 'react';
import { TabView } from 'react-native-tab-view';
import {
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  View,
} from 'react-native';

import PokeStats from './Stats';
import PokeAbout from './About';
import Text from '../Text';

import ACTIVE_TAB from '../../assets/tab-bg.png';

const initialLayout = { width: Dimensions.get('window').width };
const WRAPPER = { flexDirection: 'row', justifyContent: 'space-around' };
const TAB_STYLE = { paddingVertical: 15, paddingHorizontal: 30 };

const PokeTabs = ({ name, type }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'stats', title: 'Stats' },
    { key: 'about', title: 'About' },
  ]);

  const renderTabs = ({ jumpTo, navigationState }) => (
    <View style={WRAPPER}>
      {navigationState.routes.map((route, key) => {
        const isActive = navigationState.index === key;
        return (
          <TouchableOpacity key={route.key} onPress={() => jumpTo(route.key)}>
            <ImageBackground
              resizeMode="contain"
              source={isActive ? ACTIVE_TAB : null}
              style={TAB_STYLE}>
              <Text bold={isActive} color="white" fs={16}>
                {route.title}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <TabView
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      navigationState={{ index, routes }}
      renderTabBar={renderTabs}
      renderScene={({ route }) => {
        return {
          stats: <PokeStats name={name} type={type} />,
          about: <PokeAbout />,
        }[route.key];
      }}
    />
  );
};

export default React.memo(PokeTabs);
