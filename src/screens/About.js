import React from 'react';
import { View, Text } from 'react-native';

const About = () => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>Another Page</Text>
  </View>
);

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },

  text: {
    color: 'white',
  },
};

export default About;
