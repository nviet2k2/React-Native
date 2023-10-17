import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="40" fill="red" />
      </Svg>
      <Svg height="100" width="100" style={styles.circle}>
        <Circle cx="50" cy="50" r="40" fill="blue" />
      </Svg>
      <Svg height="100" width="100" style={styles.circle}>
        <Circle cx="50" cy="50" r="40" fill="green" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    marginTop: 20,
  },
});
