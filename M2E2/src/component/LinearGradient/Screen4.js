import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RadialGradientComponent = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(30, 184, 8, 0.50)',
          'rgba(0, 0, 0, 0.00)',
          'rgba(30, 184, 8, 0.20)',
          'rgba(30, 184, 8, 0.00)',
          '#080E16',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 6, y: 8}}
        locations={[0, 1, 0, 1, 1]}
        style={styles.gradient}>
        {/* Your component's content goes here */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 100, // Make it circular for a radial gradient effect
  },
});

export default RadialGradientComponent;
