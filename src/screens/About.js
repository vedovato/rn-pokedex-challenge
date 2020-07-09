import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const About = ({ counter }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{counter}</Text>
  </View>
);

const styles = {
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'tomato',
    alignItems: 'center',
  },

  text: { color: 'white', fontSize: 80 },
};

export default connect(state => ({
  counter: state.counter,
}))(About);
