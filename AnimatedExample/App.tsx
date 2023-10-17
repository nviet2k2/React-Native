import React, {useState, useEffect, useCallback} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';

export default function App() {
  const [animatedValue] = useState(new Animated.Value(0));
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = ['red', 'green', 'blue'];

  const startAnimation = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setCurrentColorIndex((currentColorIndex + 1) % colors.length);
      animatedValue.setValue(0);
    });
  }, [animatedValue, currentColorIndex, colors.length]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const textColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors[currentColorIndex], colors[currentColorIndex]],
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, {color: textColor}]}>
        Hello World!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
